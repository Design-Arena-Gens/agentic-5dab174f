import { NextResponse } from 'next/server';
import { runScheduler } from '@/lib/scheduler';

export const dynamic = 'force-dynamic';

export async function POST() {
  await runScheduler();
  return NextResponse.json({ ok: true });
}
