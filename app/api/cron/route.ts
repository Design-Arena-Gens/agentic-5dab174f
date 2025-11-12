import { NextResponse } from 'next/server';
import { runAll } from '@/lib/scheduler';

export const dynamic = 'force-dynamic';

export async function GET() {
  await runAll();
  return NextResponse.json({ ok: true });
}
