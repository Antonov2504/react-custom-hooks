import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export const useFetch = <T>(url: string, options = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  const getData = useCallback((params = options) => {
    setIsLoading(true);

    axios({
      method: 'GET',
      url,
      ...(params ?? {}),
    })
      .then(res => {
        setData(res.data);
        setError(null);
      })
      .catch(e => {
        console.log(e);
        setData(null);
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [options, url]);

  useEffect(() => {
    getData(options);
  }, []);

  return {
    data,
    isLoading,
    error,
    refetch: getData,
  };
};
