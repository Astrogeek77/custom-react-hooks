// _inspired by_ https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from 'react';

function useInterval(
  callback,
  delay,
  runOnLoad = false,
  effectDependencies = []
) {
  const callbackRef = useRef();

  //  a useEffect to trigger callback on mount if runOnLoad is true
  useEffect(() => {
    if (runOnLoad) {
      callback();
    }
  }, [...effectDependencies]);

  // update ref for callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => callbackRef.current(), delay);
      return () => clearInterval(id);
    }
  }, [delay, ...effectDependencies]);
}

export default useInterval;
