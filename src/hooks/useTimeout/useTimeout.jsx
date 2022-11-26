import { useCallback, useEffect, useRef } from "react"

// use Timeout hook to trigger a callback after a delay

export default function useTimeout(callback, delay) {
  // using Refs here so the our callback remains even if the componenet re-renders
  // and maintain refrential integrity.
  
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  // update the value of ref, everytime callback changes
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // set the callback to trigger after delay
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  //  clear timeout
  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  // set and clean everytime there is a chnage in delay, set or clear.
  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  // reset the timeout
  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}