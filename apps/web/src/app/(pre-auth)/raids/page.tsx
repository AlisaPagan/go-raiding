"use client";

import { useInfiniteQueryHelper } from "@/lib/query/useInfiniteQueryHelper";
import { getRaidsPage } from "@/services/mockApi";

import styles from "./raids.module.css";
import Button from "@/components/UI/Button/Button";

import Loader, { LoaderBtn } from "@/components/UI/Loader/Loader";
import SearchInput from "@/components/UI/SearchInput/SearchInput";
import Divider from "@/components/UI/Divider/Divider";

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
      <div className={`"container" ${styles.pageWrapper}`}>
        <h1 className={styles.title}>Raids</h1>
        <SearchInput
          id="search"
          name="search"
          placeholder="Find raids..."
          value=""
          onChange={() => {}}
          onBlur={() => {}}
        />
        <Divider />

        {isLoading ? (
          <div className={styles.loaderPage}>
            <Loader />
          </div>
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
              {isFetchingNextPage ? (
                <div className={styles.loaderBtn}>
                  <span>Loading...</span>
                  <LoaderBtn />
                </div>
              ) : (
                "Show more"
              )}
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
