import { useEffect, useRef } from 'react';

// a custom hook that works just like useEffect but avoid triggering callback a the mount,
// and triggers it only when dependencies change.

export default function useUpdateEffect(callback, dependencies) {
  // hook to keep track of the first render
  const firstRenderRef = useRef(true);

  // we simply check if its our first render, if it is we do nothing else it behaves normally.
  useEffect(() => {
    if (firstRenderRef.current) {
      // console.log('first render')
      firstRenderRef.current = false;
      return;
    }
    // console.log('second render')
    return callback();
  }, dependencies);
}
