import { useEffect, useState } from 'react';

export const useSearchFilter = (input, filterArray) => {
  const [matches, setMatches] = useState([]);

  function filterInput() {
    const searchResults = filterArray.filter((word) =>
      word.toLowerCase().includes(input.toLowerCase())
    );
    setMatches(searchResults);
  }

  useEffect(() => {
    filterInput();
  }, [input]);

  return [matches, filterInput];
};
