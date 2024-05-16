import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';
import { useDebounce } from './useDebounce';

export const useViewportSize = () => {
  const [size, setSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  const { width, height } = useDebounce(size, 300);

  const onResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useWindowEvent('resize', onResize, true);

  return {
    width,
    height,
  };
};
