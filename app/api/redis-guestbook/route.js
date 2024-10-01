import { NextResponse } from 'next/server';
import { createClient } from '@vercel/kv';

const GUESTBOOK_REDIS_KEY = 'doc';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 5;
  const offset = (page - 1) * limit;

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
    data = data || [];
  }

  const paginatedData = data.slice(offset, offset + limit);
  return NextResponse.json({ data: paginatedData, total: data.length });
}

export async function POST(req) {
  const newEntry = await req.json();

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

  return NextResponse.json(newEntry, { status: 201 });
}
