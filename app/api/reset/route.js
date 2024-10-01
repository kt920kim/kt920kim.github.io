import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

let dataFilePath = '';
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  dataFilePath = path.join(process.cwd(), 'data', 'guestbook.json');
} else {
  dataFilePath = '/tmp/guestbook.json';
}


export async function GET() {
  const fileContents = fs.readFileSync(dataFilePath, { encoding: 'utf8', flag: 'a+' });
  if (fileContents) {
    fs.truncateSync(dataFilePath);
  }
  return NextResponse.json('');
}
