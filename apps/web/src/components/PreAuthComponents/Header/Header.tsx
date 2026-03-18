import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Divider from "@/components/UI/Divider/Divider";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.navigation}>
            <Link href="/" aria-label="Go to homepage">
              <Image src="/logo.svg" alt="GoRaiding" width={150} height={42} />
            </Link>
            <Link href="/login" className={styles.login}>
              Log in
            </Link>
          </nav>
        </div>
      </header>
      <Divider />
    </>
  );
};

export default Header;
