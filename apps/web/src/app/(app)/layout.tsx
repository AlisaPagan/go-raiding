export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <h1>This is placeholder header in app routes</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h2>Footer represents nav panel</h2>
      </footer>
    </>
  );
}
