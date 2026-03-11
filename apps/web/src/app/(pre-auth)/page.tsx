"use client";

import ButtonStyles from "@/components/UI/Button/Button.module.css";
import Link from "next/link";
import PageStyles from "./LandingPage.module.css";
import Divider from "@/components/UI/Divider/Divider";
import Icon from "@/components/UI/Icon/Icon";
import Modal from "@/components/UI/ModalBottomSheet/ModalBottomSheet";

export default function PublicHome() {
  return (
    <main className={`${PageStyles.pageWrapper} container`}>
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
        <h2 className="visHidden">Features</h2>
        <ul className={PageStyles.featList}>
          <li className={PageStyles.listItemFeat}>
            <Icon className={PageStyles.featureIcon} name="icon-swords" size={20} />
            Approval-based raids
          </li>
          <li className={PageStyles.listItemFeat}>
            <Icon className={PageStyles.featureIcon} name="icon-users" size={20} />
            Character & ilvl validation
          </li>
          <li className={PageStyles.listItemFeat}>
            <Icon className={PageStyles.featureIcon} name="icon-cog" size={20} />
            Clear raid management
          </li>
        </ul>
      </section>
      <Divider />

      <section className={PageStyles.perks}>
        <h2 className="visHidden">Benefits</h2>
        <ul className={PageStyles.perksList}>
          <li className={PageStyles.perkListItem}>
            <Icon className={PageStyles.perkIcon} name="icon-no-ads" size={50} />
            No ads, no spam, no payments
          </li>
          <li className={PageStyles.perkListItem}>
            <Icon className={PageStyles.perkIcon} name="icon-lock" size={50} />
            Your information never shared
          </li>
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
      <Modal
        isOpen={true}
        title={"Testing title"}
        onClose={() => {
          console.log("Closed");
        }}
      >
        <p>
          Testing modal Testing modal Testing modal Testing modal Testing modal Testing modal
          Testing modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting
        </p>
        <Divider />
        <p>
          Testing modal Testing modal Testing modal Testing modal Testing modal Testing modal
          Testing modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting
        </p>

        <Divider />
        <p>
          Testing modal Testing modal Testing modal Testing modal Testing modal Testing modal
          Testing modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting
        </p>
        <Divider />
        <p>
          Testing modal Testing modal Testing modal Testing modal Testing modal Testing modal
          Testing modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting
        </p>
        <Divider />
        <p>
          Testing modal Testing modal Testing modal Testing modal Testing modal Testing modal
          Testing modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting modalTesting
          modalTesting modalTesting modalTesting modalTesting
        </p>
      </Modal>
    </main>
  );
}
