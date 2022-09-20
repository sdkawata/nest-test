import { useCallback, useEffect, useState } from "react";

type UseApiReturn<T> = {
    data: T | undefined,
    loading: boolean,
    reload: () => void,
}
export function useApi<T>(fetcher:() => Promise<T>): UseApiReturn<T> {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<T | undefined>(undefined);
  const reload = useCallback(async () => {
    const result = await fetcher();
    setLoading(false);
    setResult(result);
  }, [fetcher])
  useEffect(() => {
    reload()
  }, [reload])
  return {data: result, loading, reload};
}
