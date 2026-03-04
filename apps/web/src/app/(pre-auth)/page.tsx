import styles from "../../components/UI/Button/Button.module.css";
import Link from "next/link";

export default function PublicHome() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Organize World of Warcraft raids without chaos</h1>
      <p>Apply, approve, manage: all in one place.</p>

      <Link href="/signup" className={`${styles.button} ${styles.primary}`}>
        Sign up
      </Link>

      <Link href="/raids" className={`${styles.button} ${styles.secondary}`}>
        Browse raids
      </Link>

      <ul>
        <li>Approval-based raids</li>
        <li>Character & ilvl validation</li>
        <li>Clear raid management</li>
      </ul>

      <ul>
        <li>No ads, no spam</li>
        <li>Your information never shared</li>
      </ul>

      <Link href="/signup" className={`${styles.button} ${styles.primary}`}>
        Sign up
      </Link>

      <Link href="/raids" className={`${styles.button} ${styles.secondary}`}>
        Browse raids
      </Link>
    </main>
  );
}
