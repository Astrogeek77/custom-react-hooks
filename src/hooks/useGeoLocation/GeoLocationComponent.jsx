import useGeolocation from './useGeolocation';

export default function GeoLocationComponent() {
  console.log(useGeolocation());
  const {
    loading,
    error,
    data,
  } = useGeolocation();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div>
        Lat: {data.latitude} x Long: {data.longitude}
      </div>
    </>
  );
}
