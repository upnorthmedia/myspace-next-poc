import PocketBase from 'pocketbase';
import { NextResponse } from 'next/server';

const pb = new PocketBase('http://127.0.0.1:8090');

const records = await pb.collection('guns').getFullList({
    sort: '-created',
});

export async function GET() {
    
    return NextResponse.json(records);
  }