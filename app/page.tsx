"use client";
import { useEffect, useState } from "react";
import { ScheduleTable } from "@/components/ScheduleTable";
import { StatsChart } from "@/components/StatsChart";

type PostItem = {
  id: string;
  platform: string;
  contentPreview: string;
  scheduledAt: string;
  status: string;
};

type Stats = {
  platform: string;
  posts: number;
  engagements: number;
};

export default function Page() {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [stats, setStats] = useState<Stats[]>([]);
  const [running, setRunning] = useState(false);

  async function refresh() {
    const [p, s] = await Promise.all([
      fetch("/api/posts").then(r => r.json()),
      fetch("/api/stats").then(r => r.json())
    ]);
    setPosts(p.items);
    setStats(s.items);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function runNow() {
    setRunning(true);
    try {
      await fetch("/api/cron", { cache: "no-store" });
      await refresh();
    } finally {
      setRunning(false);
    }
  }

  return (
    <main style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      <h1>Agentic Smart Scheduler</h1>
      <p style={{ color: '#555' }}>Manages multi-platform publishing, rescheduling, and real-time analytics.</p>
      <div style={{ display: 'flex', gap: 12, margin: '16px 0' }}>
        <button onClick={runNow} disabled={running} style={{ padding: '8px 14px' }}>
          {running ? 'Running?' : 'Run scheduler now'}
        </button>
        <button onClick={refresh} style={{ padding: '8px 14px' }}>Refresh</button>
      </div>
      <h2>Upcoming & Recent Posts</h2>
      <ScheduleTable items={posts} />
      <h2 style={{ marginTop: 32 }}>Engagement Analytics</h2>
      <StatsChart items={stats} />
    </main>
  );
}
