import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

let dataFilePath = '';
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  dataFilePath = path.join(process.cwd(), 'data', 'guestbook.json');
} else {
  dataFilePath = '/tmp/guestbook.json';
}

/*
export async function GET() {
  const fileContents = fs.readFileSync(dataFilePath, 'utf8');
  const data = JSON.parse(fileContents);
  return NextResponse.json(data);
}
*/

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 5;
  const offset = (page - 1) * limit;

  // 'a+' flag: Open file for reading and appending. The file is created if it does not exist.
  const fileContents = fs.readFileSync(dataFilePath, { encoding: 'utf8', flag: 'a+' });
  const data = fileContents ? JSON.parse(fileContents) : [];

  const paginatedData = data.slice(offset, offset + limit);
  return NextResponse.json({ data: paginatedData, total: data.length });
}

export async function POST(req) {
  const newEntry = await req.json();
  const fileContents = fs.readFileSync(dataFilePath, { encoding: 'utf8', flag: 'a+' });
  const data = fileContents ? JSON.parse(fileContents) : [];
  data.push(newEntry);
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  return NextResponse.json(newEntry, { status: 201 });
}
