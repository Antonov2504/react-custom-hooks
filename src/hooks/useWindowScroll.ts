import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';
import { useThrottle } from './useThrottle';

type ScrollParams = {
  x: number;
  y: number;
}

type ReturnValue = [
  scroll: ScrollParams,
  scrollTo: (scrollParams: Partial<ScrollParams>) => void
];

export const useWindowScroll = (): ReturnValue => {
  const [scroll, setScroll] = useState(() => ({
    x: window.scrollX,
    y: window.scrollY,
  }));

  const throttledScroll = useThrottle(scroll, 300);

  const onScroll = () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  const scrollTo = ({ x, y }: { x?: number; y?: number }) => {
    if (x !== undefined || y !== undefined) {
      setScroll(prev => ({
        x: x ?? prev.x,
        y: y ?? prev.y,
      }));

      window.scroll({ top: y ?? scroll.y, left: x ?? scroll.x });
    }
  };

  useWindowEvent('scroll', onScroll, true);

  return [throttledScroll, scrollTo];
};
