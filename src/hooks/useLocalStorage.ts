import { useState } from 'react';

type ReturnValue = [
  value: string | null,
  {
    setItem: (value: string) => void,
    removeItem: () => void,
  }
];

type UseLocalStorage = (initialValue: string) => ReturnValue;

const storageKey = 'token';

const getItem = (key: string, initialValue: string | (() => string)) => {
  const item = localStorage.getItem(key);

  if (item) {
    return item;
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
};

export const useLocalStorage: UseLocalStorage = (initialValue: string) => {
  const [token, setToken] = useState(() => getItem(storageKey, initialValue));

  const setItem = (newValue: string) => {
    localStorage.setItem(storageKey, newValue);
    setToken(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(storageKey);
    setToken('');
  };

  return [token, {
    setItem,
    removeItem,
  }];
};
