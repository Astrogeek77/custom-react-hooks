import { useRef } from 'react';
import useCopyToClipboard from './useCopyToClipboard';

export default function CopyToClipboardComponent() {
  const inputRef = useRef();
  const [copyToClipboard, { success }] = useCopyToClipboard();

  return (
    <>
      <button
        onClick={() => {
          copyToClipboard(inputRef.current.value);
          alert(success ? 'Copied' : 'failed');
        }}
      >
        Copy Text from Input
      </button>
      <input ref={inputRef} type="text" />
    </>
  );
}
