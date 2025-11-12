"use client";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function StatsChart({ items }: { items: { platform: string; posts: number; engagements: number }[] }) {
  const labels = items.map(i => i.platform);
  const data = {
    labels,
    datasets: [
      {
        label: 'Posts',
        data: items.map(i => i.posts),
        backgroundColor: 'rgba(54, 162, 235, 0.5)'
      },
      {
        label: 'Engagements',
        data: items.map(i => i.engagements),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };
  return (
    <div style={{ background: '#fafafa', padding: 12, border: '1px solid #eee' }}>
      <Bar data={data} />
    </div>
  );
}
