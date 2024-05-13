import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url, options = {}) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const getData = useCallback(async (params) => {
    try {
      const requestUrl = url + `${params ? '?' + new URLSearchParams({ ...params }).toString() : ''}`;
      const response = await fetch(requestUrl);
      const responseJson = await response.json();

      if (response.ok) {
        setState(prev => ({ ...prev, isLoading: false, data: responseJson, error: null }));
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      console.log(e);
      setState(prev => ({ ...prev, isLoading: false, data: null, error: e }));
    }
  }, [url]);

  const refetch = useCallback((options) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    getData(options?.params);
  }, [getData]);

  useEffect(() => {
    getData(options.params);
  }, [getData, options.params]);

  const { data, isLoading, error } = state;

  return {
    data,
    isLoading,
    error,
    refetch
  };
};
