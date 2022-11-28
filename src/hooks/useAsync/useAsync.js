import { useCallback, useEffect, useState } from 'react';

// a custom hook to resolve a promise asyncronusly

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState();

  // whenever our dependencies change, useCallback provides us with a new callbackMemoized
  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  // our useEffect triggers the callback memoized whenever it changes
  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
