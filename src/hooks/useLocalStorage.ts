import { useState } from 'react';

type ReturnValue = [
  value: string | null,
  {
    setItem: (value: string) => void,
    removeItem: () => void,
  }
];

type UseLocalStorage = (key: string, initialValue?: string) => ReturnValue;

const getItem = (key: string, initialValue?: string | (() => string)) => {
  const item = localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
};

export const useLocalStorage: UseLocalStorage = (key, initialValue) => {
  const [token, setToken] = useState(() => getItem(key, initialValue) ?? null);

  const setItem = (newValue: string) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setToken(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setToken(null);
  };

  return [token, {
    setItem,
    removeItem,
  }];
};
