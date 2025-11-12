import { NextResponse } from 'next/server';
import { notifyTeam } from '@/lib/notify';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { message } = await request.json();
  await notifyTeam(message || 'Hello from Agentic Scheduler');
  return NextResponse.json({ ok: true });
}
