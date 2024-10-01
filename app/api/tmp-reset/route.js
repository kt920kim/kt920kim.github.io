import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

let dataFilePath = '';
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  dataFilePath = path.join(process.cwd(), 'data', 'tmp_guestbook.json');
} else {
  dataFilePath = '/tmp/tmp_guestbook.json';
}


export async function GET() {
  const fileContents = fs.readFileSync(dataFilePath, { encoding: 'utf8', flag: 'a+' });
  if (fileContents) {
    fs.truncateSync(dataFilePath);
  }
  return NextResponse.json('');
}

export async function POST(req) {
  const newEntry = await req.json();
  const fileContents = fs.readFileSync(dataFilePath, { encoding: 'utf8', flag: 'a+' });
  let data = fileContents ? JSON.parse(fileContents) : [];

  if (Array.isArray(newEntry)) {
    data = data.concat(newEntry);
  } else {
    data.push(newEntry);
  }

  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  return NextResponse.json(newEntry, { status: 201 });
}