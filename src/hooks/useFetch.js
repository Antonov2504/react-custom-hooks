import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url, options = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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
