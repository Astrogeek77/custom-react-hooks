import { useState, useEffect, useCallback } from 'react';

const useMediaQuery = (queries = [], values = [], defaultValue) => {
  // The Window interface's matchMedia() method returns a new MediaQueryList object
  // that can then be used to determine if the document matches the media query string,
  // as well as to monitor the document to detect when it matches(or stops matching)
  // that media query.
  const mediaQueryList = queries.map((q) => window.matchMedia(q));

  const getValue = useCallback(() => {
    // The JavaScript code passes the media query to match into matchMedia() to compile it,
    //  then sets the < span > 's innerText to the value of the results' matches property,
    // so that it indicates whether or not the document matches the media query at the moment
    // the page was loaded.
    const index = mediaQueryList.findIndex((mql) => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  }, [mediaQueryList, values, defaultValue]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryList.forEach((mql) => mql.addEventListener('change', handler));

    // clean up for the media queries
    return () =>
      mediaQueryList.forEach((mql) =>
        mql.removeEventListener('change', handler)
      );
  }, [getValue, mediaQueryList]);

  return value;
};

export default useMediaQuery;
