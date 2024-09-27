import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'guestbook.json');

export async function GET() {
  const fileContents = fs.readFileSync(dataFilePath, 'utf8');
  const data = JSON.parse(fileContents);
  return NextResponse.json(data);
}

export async function POST(req) {
  const newEntry = await req.json();
  const fileContents = fs.readFileSync(dataFilePath, 'utf8');
  const data = JSON.parse(fileContents);
  data.push(newEntry);
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  return NextResponse.json(newEntry, { status: 201 });
}
