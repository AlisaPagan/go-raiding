"use client";

import { useInfiniteQueryHelper } from "@/lib/query/useInfiniteQueryHelper";
import { getRaidsPage } from "@/services/mockApi";

import styles from "./raids.module.css";
import Button from "@/components/UI/Button/Button";

export default function RaidsPage() {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQueryHelper({
      queryKey: ["raids"],
      queryFn: getRaidsPage,
    });

  const raids = data?.pages.flat() ?? [];

  const handleShowMore = () => {
    fetchNextPage();
  };
  return (
    <main className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Raids</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className={styles.list}>
            {raids.map((raid) => (
              <li key={raid.id} className={styles.item}>
                {raid.instanceName}
              </li>
            ))}
          </ul>
        )}

        {hasNextPage && !isLoading && (
          <div className={styles.buttonWrapper}>
            <Button variant="secondary" onClick={handleShowMore} disabled={isFetchingNextPage}>
              {isFetchingNextPage ? "Loading..." : "Show more"}
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
