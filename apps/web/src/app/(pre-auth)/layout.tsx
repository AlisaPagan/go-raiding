import Footer from "@/components/PreAuthComponents/Footer/Footer";
import Header from "@/components/PreAuthComponents/Header/Header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
