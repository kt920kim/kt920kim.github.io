import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { createClient } from '@vercel/kv';

const GUESTBOOK_REDIS_KEY = 'guestbook';

function getDataFilePath() {
  let dataFilePath = '';
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    dataFilePath = path.join(process.cwd(), 'data', 'guestbook.json');
  } else {
    dataFilePath = '/tmp/guestbook.json';
  }

  return dataFilePath;
}

function readContentsFromFile(dataFilePath) {
  if (!dataFilePath) {
    return [];
  }

  // 'a+' flag: Open file for reading and appending. The file is created if it does not exist.
  const fileContents = fs.readFileSync(dataFilePath, { encoding: 'utf8', flag: 'a+' });

  let data = [];
  try {
    data = fileContents ? JSON.parse(fileContents) : [];
  } catch (err) {
    //
  } finally {
    data = [];
  }

  return data;
}

function writeContentsToFile(dataFilePath, data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  const fileContents = fs.readFileSync(dataFilePath, { encoding: 'utf8', flag: 'a+' });
  const updatedData = fileContents ? JSON.parse(fileContents) : [];
  updatedData.push(newEntry);

  fs.writeFileSync(dataFilePath, JSON.stringify(updatedData, null, 2));
}

async function readContentsFromRedis() {
  // KV redis client
  const kvRedisClient = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_READ_ONLY_TOKEN,
  });

  let data = [];
  try {
    data = await kvRedisClient.get(GUESTBOOK_REDIS_KEY);
  } catch (err) {
    console.error(`failed to get ${GUESTBOOK_REDIS_KEY}`, err);
  } finally {
    // do nothing
  }

  return data || [];
}

async function writeContentsToRedis(data) {

  const newEntry = data;

  // KV redis client
  const kvRedisReadClient = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_READ_ONLY_TOKEN,
  });

  // get value into 'doc' key
  let entries = [];
  let newEntries = [];
  try {
    entries = await kvRedisReadClient.get(GUESTBOOK_REDIS_KEY);
  } catch (err) {
    console.error(`failed to get ${GUESTBOOK_REDIS_KEY}`, err);
  } finally {
    entries = entries || [];
    newEntries = entries.concat(newEntry);
  }

  // KV redis client
  const kvRedisWriteClient = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  // update value into 'doc' key
  await kvRedisWriteClient.set(GUESTBOOK_REDIS_KEY, newEntries);
}


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 5;
  const offset = (page - 1) * limit;

  /*
  const dataFilePath = getDataFilePath();
  const data = readContentsFromFile(dataFilePath, newEntry);
  */

  // read contents from redis 'guestbook' key
  const data = await readContentsFromRedis();

  // slice contents
  const paginatedData = data.slice(offset, offset + limit);
  return NextResponse.json({ data: paginatedData, total: data.length });
}

export async function POST(req) {
  const newEntry = await req.json();

  /*
  const dataFilePath = getDataFilePath();
  writeContentsToFile(dataFilePath, newEntry);
  */

  // update contents into redis 'guestbook' key
  await writeContentsToRedis(newEntry);

  return NextResponse.json(newEntry, { status: 201 });
}
