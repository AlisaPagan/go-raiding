import ButtonStyles from "../../components/UI/Button/Button.module.css";
import Link from "next/link";
import PageStyles from "./LandingPage.module.css";
import Divider from "@/components/UI/Divider/Divider";

export default function PublicHome() {
  return (
    <main className={`${PageStyles.pageWrapper} container section`}>
      <section className={PageStyles.hero}>
        <h1 className={PageStyles.heading}>
          Organize <span className={PageStyles.accentText}>World of Warcraft raids</span> without
          chaos
        </h1>
        <p className={PageStyles.text}>
          Apply, approve, manage: <span className={PageStyles.accentText}>all in one place.</span>
        </p>
        <div className={PageStyles.ctaWrapper}>
          <Link href="/signup" className={`${ButtonStyles.button} ${ButtonStyles.primary}`}>
            Sign up
          </Link>

          <Link href="/raids" className={`${ButtonStyles.button} ${ButtonStyles.secondary}`}>
            Browse raids
          </Link>
        </div>
        <Divider />
      </section>

      <section className={PageStyles.features}>
        <h2 className={PageStyles.visHidden}>Features</h2>
        <ul className={PageStyles.featList}>
          <li className={PageStyles.listItemFeat}>Approval-based raids</li>
          <li className={PageStyles.listItemFeat}>Character & ilvl validation</li>
          <li className={PageStyles.listItemFeat}>Clear raid management</li>
        </ul>
        <Divider />
      </section>

      <section className={PageStyles.perks}>
        <h2 className={PageStyles.visHidden}></h2>
        <ul className={PageStyles.perksList}>
          <li>No ads, no spam</li>
          <li>Your information never shared</li>
        </ul>
        <div className={PageStyles.ctaWrapper}>
          <Link href="/signup" className={`${ButtonStyles.button} ${ButtonStyles.primary}`}>
            Sign up
          </Link>

          <Link href="/raids" className={`${ButtonStyles.button} ${ButtonStyles.secondary}`}>
            Browse raids
          </Link>
        </div>
      </section>
    </main>
  );
}
