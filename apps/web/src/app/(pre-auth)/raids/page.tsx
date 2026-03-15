"use client";

import { useState } from "react";
import { useInfiniteQueryHelper } from "@/lib/hooks/useInfiniteQueryHelper";
import { getRaids } from "@/services/raids.api";

import styles from "./raids.module.css";

export default function RaidsPage() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQueryHelper({
    queryKey: ["raids"],
    queryFn: getRaids,
  });
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Raid ${i + 1}`));

  const handleShowMore = () => {
    const next = Array.from({ length: 10 }, (_, i) => `Raid ${items.length + i + 1}`);
    setItems([...items, ...next]);
  };

  return (
    <main className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Raids</h1>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.buttonWrapper}>
          <button className={styles.showMoreButton} onClick={handleShowMore}>
            Show more
          </button>
        </div>
      </div>
    </main>
  );
}
