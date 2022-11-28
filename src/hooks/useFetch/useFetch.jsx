// a react custom hook to make requests to a url and get the response / data

import useAsync from '../useAsync/useAsync';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

export default function useFetch(url, options = {}, dependencies = []) {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      if (res.ok) return res.json();
      // we explicitly reject the promise beccuse useFetch fails to return faliures
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}