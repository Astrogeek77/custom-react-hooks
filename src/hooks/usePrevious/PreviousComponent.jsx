import { useState } from 'react';
import usePrevious from './usePrevious';

export default function PreviousComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Gautam');
  const previousCount = usePrevious(count);

  return (
    <div>
      <div>
        Current Count: {count}
        <br></br>
        Previous Count: {previousCount}
      </div>
      <br></br>
      <div>Name: {name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName((name) => name == 'Gautam' ? 'Rajesh' : 'Gautam')}>Change Name</button>
    </div>
  );
}
