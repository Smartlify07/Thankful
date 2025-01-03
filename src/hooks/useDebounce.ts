import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebouncedFunction = (...args: any[]) => void; // specifying the structure of the function, so TS doesn't disturb.
type Timer = ReturnType<typeof setTimeout>;

export function useDebounce<T extends DebouncedFunction>(
  func: T,
  delay: number
) {
  // ...args lets us pass arguments to the debounced function
  const timer = useRef<Timer>(); // use a ref here instead of state, to prevent stale closures, the ref ensures that the timer is always in sync with the UI.

  useEffect(() => {
    const newTimer = timer.current;
    return () => {
      if (!newTimer) return;
      clearTimeout(newTimer); // clear the timeout once the component unmounts.
    };
  });
  const debouncedFunction = ((...args) => {
    setTimeout(() => {
      // closure ,
      func(...args); // the function passed in as a parameter, accesses it's arguments if it has any.
    }, delay);
  }) as T;

  return debouncedFunction;
}
