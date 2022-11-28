import { useState } from 'react';
import useStateWithHistory from './useStateWithHistory';

export default function StateWithHistoryComponent() {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1);
  const [name, setName] = useState('Gautam');

  return (
    <div>
      <div>Current state: {count}</div>
      <div>History: {history.join(', ')}</div>
      <div>Pointer - {pointer}</div>
      <div>Name: {name}</div>
      <button onClick={() => setCount((currentCount) => currentCount * 3)}>
        Triple the state
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment state
      </button>
      <button onClick={back}>Go Back</button>
      <button onClick={forward}>Go Forward</button>
      <button onClick={() => go(4)}>Go To Index 4</button>
      <button
        onClick={() =>
          setName((name) => (name == 'Gautam' ? 'Rajesh' : 'Gautam'))
        }
      >
        Change Name
      </button>
    </div>
  );
}
