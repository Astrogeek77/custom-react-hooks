// a react custom hook to make requests to a url and get the response / data

import { useState, useEffect } from "react";

const useFetch2 = url => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  
  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        setResult(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchInfo();
  }, [url]);

  return { error, loading, result };
};

export default useFetch2;