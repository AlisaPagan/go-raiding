"use client";

import { useState } from "react";
import { useInfiniteQueryHelper } from "@/lib/useInfiniteQueryHelper";
import { getRaids } from "@/services/raids.api";

import styles from "./page.module.css";

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
    <main style={{ padding: 24 }}>
      <h1>Raids</h1>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>

      <button className={styles.button} onClick={handleShowMore}>
        Show more
      </button>
    </main>
  );
}
