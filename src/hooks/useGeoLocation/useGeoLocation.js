import { useState, useEffect } from 'react';

export default function useGeolocation(options) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    // success handling
    const successHandler = (e) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };
    // error handling
    const errorHandler = (e) => {
      setError(e);
      setLoading(false);
    };

    // get current position
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );

    // watch position continously
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );
    // cleanup
    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

    
  return { loading, error, data };
}
