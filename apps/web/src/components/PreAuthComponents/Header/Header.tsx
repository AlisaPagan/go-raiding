import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/logo.svg" alt="GoRaiding" width={150} height={42} />
        </Link>
        <Link href="/login">Log in</Link>
      </nav>
    </header>
  );
};

export default Header;
