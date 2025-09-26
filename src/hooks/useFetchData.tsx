import { useCallback, useEffect, useState } from "react";
import { ErrorType } from "../types/logs";

const useFetchData = <T, U>(
  url: string,
): {
  data: T | null;
  fetchError: U | undefined;
} => {
  const [data, setData] = useState<T | null>(null);
  const [fetchError, setFetchError] = useState<U | undefined>(undefined);

  const apiCall = useCallback(async (): Promise<void> => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        setFetchError({
          message: "Problem fetching data!",
        } as U);
        return;
      }

      const data: T = await res.json();
      setData(data);
    } catch (error: unknown) {
      setData(null);
      setFetchError({
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      } as U);
    }
  }, [url]);

  useEffect(() => {
    apiCall();
  }, [apiCall]);

  return {
    data,
    fetchError,
  };
};

export { useFetchData };
