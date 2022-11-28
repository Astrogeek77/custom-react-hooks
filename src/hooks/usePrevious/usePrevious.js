import { useRef } from 'react';

// a custom hook to get the previous value of a state

export default function usePrevious(value) {
  // refs for current and the previous value
  const currentRef = useRef(value);
  const previousRef = useRef(null);

    // check if the current value as changed
  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
