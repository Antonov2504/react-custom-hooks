import { useEffect, useRef, useState } from "react";

export const useThrottle = <T>(value: T, interval: number) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const executionTime = useRef(Date.now());

  useEffect(() => {
    if (Date.now() >= executionTime.current + interval) {
      executionTime.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        executionTime.current = Date.now();
        setThrottledValue(value);
      }, interval);

      return () => clearInterval(timerId);
    }
  }, [interval, value]);

  return throttledValue;
};
