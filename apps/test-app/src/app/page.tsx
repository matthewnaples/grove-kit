export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">The Grove Test App</h1>
        <p className="text-muted-foreground">
          This is a test Next.js app for testing component installation.
        </p>
        <p className="text-sm text-muted-foreground">
          Use <code className="bg-muted px-2 py-1 rounded">the-grove add &lt;component&gt;</code> to install components.
        </p>
      </div>
    </main>
  );
}
