import ButtonStyles from "../../components/UI/Button/Button.module.css";
import Link from "next/link";
import PageStyles from "./LandingPage.module.css";

export default function PublicHome() {
  return (
    <main className="container">
      <section className="section">
        <h1>Organize World of Warcraft raids without chaos</h1>
        <p>Apply, approve, manage: all in one place.</p>

        <Link
          href="/signup"
          className={`${ButtonStyles.button} ${ButtonStyles.primary} ${ButtonStyles.btn_half}`}
        >
          Sign up
        </Link>

        <Link
          href="/raids"
          className={`${ButtonStyles.button} ${ButtonStyles.secondary} ${ButtonStyles.btn_half}`}
        >
          Browse raids
        </Link>
      </section>

      <section>
        <ul>
          <li>Approval-based raids</li>
          <li>Character & ilvl validation</li>
          <li>Clear raid management</li>
        </ul>
      </section>

      <section>
        <ul>
          <li>No ads, no spam</li>
          <li>Your information never shared</li>
        </ul>

        <Link
          href="/signup"
          className={`${ButtonStyles.button} ${ButtonStyles.primary} ${ButtonStyles.btn_half}`}
        >
          Sign up
        </Link>

        <Link
          href="/raids"
          className={`${ButtonStyles.button} ${ButtonStyles.secondary} ${ButtonStyles.btn_half}`}
        >
          Browse raids
        </Link>
      </section>
    </main>
  );
}
