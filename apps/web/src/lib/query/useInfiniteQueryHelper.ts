import { QueryKey, useInfiniteQuery } from "@tanstack/react-query";

type UseInfiniteQueryHelperParams<T> = {
  queryKey: QueryKey;
  queryFn: ({ pageParam }: { pageParam: number }) => Promise<T[]>;
};

export function useInfiniteQueryHelper<T>({ queryKey, queryFn }: UseInfiniteQueryHelperParams<T>) {
  return useInfiniteQuery({
    queryKey,
    initialPageParam: 1,
    queryFn: ({ pageParam }) => queryFn({ pageParam: pageParam as number }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined;
      return pages.length + 1;
    },
  });
}
