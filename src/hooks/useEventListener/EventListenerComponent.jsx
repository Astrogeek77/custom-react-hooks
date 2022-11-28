// something to add

import { useRef } from 'React';
import useEventListener from './useEventListener';

const Dialog = ({ show = false, onClose = () => null }) => {
  const dialogRef = useRef();

  // Event listener to close dialog on click outside element
  useEventListener(
    'mousedown',
    event => {
      // Do nothing if the event was already processed
      if (event.defaultPrevented) {
        return;
      }
      // Check if click is outside the dialog
      if (!dialogRef?.current?.contains(event.target)) {
        onClose();
      }
    },
    dialogRef.current
  );

  // Renders dailog
  return show
    ? React.createPortal(<div ref={dialogRef}>...</div>, document.body)
    : null;
};