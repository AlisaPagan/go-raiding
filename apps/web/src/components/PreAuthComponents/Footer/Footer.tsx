import styles from "./Footer.module.css";

import Link from "next/link";
import Image from "next/image";
import Divider from "@/components/UI/Divider/Divider";

const Footer = () => {
  return (
    <footer aria-label="Footer navigation">
      <Divider />
      <div className={`container ${styles.footer}`}>
        <Link href="/" aria-label="Go to homepage">
          <Image src="/logo.svg" alt="GoRaiding" width={150} height={42} />
        </Link>
        <nav className={styles.navigation}>
          <Link className={styles.navLink} href="/terms-of-use">
            Terms of Use
          </Link>
          <Link className={styles.navLink} href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className={styles.navLink} href="/contact-us">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
