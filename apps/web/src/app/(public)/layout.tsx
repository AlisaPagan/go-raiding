export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <h1>This is placeholder header in public routes</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h2>This is placeholder footer in public routes</h2>
      </footer>
    </>
  );
}
