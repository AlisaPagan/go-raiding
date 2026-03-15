import { useInfiniteQuery } from "@tanstack/react-query";

type UseInfiniteQueryHelperParams<T> = {
    queryKey: string[];
    queryFn: ({ pageParam }: { pageParam: number }) => Promise<T[]>;
};

export function useInfiniteQueryHelper<T>({
    queryKey,
    queryFn,
}: UseInfiniteQueryHelperParams<T>) {
    return useInfiniteQuery({
        queryKey,
        initialPageParam: 1,
        queryFn: ({ pageParam }) => queryFn({ pageParam: pageParam as number }),
        getNextPageParam: (_lastPage, pages) => pages.length + 1,
    });
}
