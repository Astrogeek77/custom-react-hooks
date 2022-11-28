import { useCallback, useRef, useState } from 'react';

const CAPACITY = 10;

// A custom hook which stores prev values of the state (CAPCITY) and provides you
// full control over any of the stored previous state

export default function useStateWithHistory(
  defaultValue,
  { capacity = CAPACITY } = {}
) {
  // state for currentvalue, refs for history array and pointer to the history array
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  // we modify the set operation
  const set = useCallback(
    (v) => {
      //   calculate the value of the current
      const resolvedValue = typeof v === 'function' ? v(value) : v;

      // if we find that the value has changed
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        // delete all instances of the state after the pointer
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        // push the new resolvedValue to the history array
        historyRef.current.push(resolvedValue);

        // check for the capacity and shift the least recent value
        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }
        // set the pointer
        pointerRef.current = historyRef.current.length - 1;
      }
      setValue(resolvedValue);
    },
    [capacity, value]
  );

    // utility function to go back in state history
  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

    // utility function to go forward in state history
  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

    // utility dunction to go a specific point / index in history array
  const go = useCallback((index) => {
    if (index < 0 || index > historyRef.current.length - 1) return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
}
