import { useCallback, useState, useEffect } from "react"

// a custom hook to store the value in local / session storage that persists and can be used later.

// utility function to store the value in local storage
export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage)
}

// utility function to store the value in session storage
export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage)
}

// main custom hook body which manages state for the value
function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    // check if the value with the given key exists
    const jsonValue = storageObject.getItem(key)
    // if does return JSON parse of the value
    if (jsonValue != null) return JSON.parse(jsonValue)

    // if not return the default value or defaultValue() depending on type of value.
    if (typeof defaultValue === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    // if undefined remove from storage
    if (value === undefined) return storageObject.removeItem(key)
    // set the value to the stroage
    storageObject.setItem(key, JSON.stringify(value))
  }, [key, value, storageObject])

  // remove the value
  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return [value, setValue, remove]
}