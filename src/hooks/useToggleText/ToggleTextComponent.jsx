import React from 'react';
import useToggleText from './useToggleText';

function ToggleTextComponent() {
  const { text, toggle } = useToggleText('default value', 'toggled value');

  return (
    <>
      <div
        style={{
          width: 100,
          height: 100,
          background: '#ccc',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {text}
      </div>
      <button onClick={toggle}>Click</button>
    </>
  );
}

export default ToggleTextComponent;
