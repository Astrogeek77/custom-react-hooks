import { useState } from "react"

// toggle hook used to toggle value for variable
export default function useToggle(defaultValue) {
  // we pass the default value to  a state
  const [value, setValue] = useState(defaultValue)

  // a simple function to toggle or set the value according to the given value
  function toggleValue(value) {
    // if the found value is a boolean ie [true, false] we use it or 
    // in other case just toggle the currentValue
    setValue(currentValue =>
      typeof value === "boolean" ? value : !currentValue
    )
  }

  // return value and toggle function
  return [value, toggleValue]
}