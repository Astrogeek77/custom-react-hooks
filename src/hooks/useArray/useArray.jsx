import { useState } from "react"

// use Array hook to encapsule all the operations related to a array.

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue)

  // push elementy in to the array
  function push(element) {
    setArray(a => [...a, element])
  }

  // filter array according to the callback
  function filter(callback) {
    setArray(a => a.filter(callback))
  }

  // update the value at a specific index
  function update(index, newElement) {
    setArray(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ])
  }

  // remove the element at a specific index
  function remove(index) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  // clear the array
  function clear() {
    setArray([])
  }

  // return all the available operations
  return { array, set: setArray, push, filter, update, remove, clear }
}