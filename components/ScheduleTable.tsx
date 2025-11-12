"use client";

export function ScheduleTable({ items }: { items: { id: string; platform: string; contentPreview: string; scheduledAt: string; status: string }[] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={th}>ID</th>
            <th style={th}>Platform</th>
            <th style={th}>Content</th>
            <th style={th}>Scheduled</th>
            <th style={th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td style={td}>{i.id.slice(0, 8)}</td>
              <td style={td}>{i.platform}</td>
              <td style={td}>{i.contentPreview}</td>
              <td style={td}>{new Date(i.scheduledAt).toLocaleString()}</td>
              <td style={td}>{i.status}</td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td style={td} colSpan={5}>No posts yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const th: React.CSSProperties = { textAlign: 'left', padding: 8, borderBottom: '1px solid #ddd' };
const td: React.CSSProperties = { padding: 8, borderBottom: '1px solid #eee', verticalAlign: 'top' };
