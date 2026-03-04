import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link href="/">
          <Image src="/logo.svg" alt="GoRaiding" width={150} height={42} />
        </Link>
        <Link href="/terms-of-use">Terms of Use</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
    </footer>
  );
};

export default Footer;
