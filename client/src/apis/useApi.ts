import { useEffect, useState } from "react";

type UseApiReturn<T> = {
    data: T | undefined,
    loading: boolean,
}
export function useApi<T>(fetcher:() => Promise<T>): UseApiReturn<T> {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<T | undefined>(undefined);
  useEffect(() => {
    (async () => {
      const result = await fetcher();
      setLoading(false);
      setResult(result);
    })()
  }, [fetcher])
  return {data: result, loading};
}
