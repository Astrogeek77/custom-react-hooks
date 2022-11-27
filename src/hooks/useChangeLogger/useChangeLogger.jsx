import { useEffect, useRef } from 'react'

// A simple react hook that logs the value to the console whenever the value chnages.

function useChangeLogger(value) {
    const firstRenderRef = useRef(true)
    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        console.log("Value Changed!")
        console.log({ value })
        //  alert("Value Changed! new value: " + value)
  }, [value])
}

export default useChangeLogger