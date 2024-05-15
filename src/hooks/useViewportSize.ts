import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export const useViewportSize = () => {
  const [size, setSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  const onResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useWindowEvent('resize', onResize, true);

  const { width, height } = size;

  return {
    width,
    height,
  };
};
