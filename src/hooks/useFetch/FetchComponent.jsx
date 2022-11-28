import { useState } from 'react';
import useFetch from './useFetch';

export default function FetchComponent() {
  const [id, setId] = useState(1);
  const { loading, error, posts } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  );
  console.log(posts)

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId((currentId) => currentId + 1)}>
        Increment ID
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(posts, null, 2)}</div>
      <pre>{posts}</pre>
    </div>
  );
}
