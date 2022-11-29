import { useEffect, useRef } from 'react'

// hook to add a event listener to a target
const useEventListener = (
  eventType = '',
  listener = () => null,
  target = window,
  options = null
) => {
  const savedListener = useRef();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target?.addEventListener) return;

    // get event listener
    const eventListener = event => savedListener.current(event);
      
    // add a event listener to the target
    target.addEventListener(eventType, eventListener, options);

    // remove the event listener in the cleanup of useEffect  
    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target, options]);
};

export default useEventListener;