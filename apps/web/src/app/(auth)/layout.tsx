export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <h1>This is placeholder header in private routes</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h2>This is placeholder footer in private routes</h2>
      </footer>
    </>
  );
}
