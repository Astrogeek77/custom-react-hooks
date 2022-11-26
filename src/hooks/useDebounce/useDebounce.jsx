import { useEffect } from "react"
import useTimeout from "../useTimeout/useTimeout"

// useDebounce hook to perform a action after a set delay like searching

export default function useDebounce(callback, delay, dependencies) {
  // works using the useTimeout hook
  const { reset, clear } = useTimeout(callback, delay)

  // we call reset each time our dependency change and 
  // wait for the delayto call calback(usetimeout logic).
  useEffect(reset, [...dependencies, reset])

  // we call clear when the component mounts to avoid calling callback at mount
  useEffect(clear, [])
}