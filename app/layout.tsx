export const metadata = {
  title: "Agentic Scheduler",
  description: "Multi-platform content scheduler and analytics"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial' }}>
        {children}
      </body>
    </html>
  );
}
