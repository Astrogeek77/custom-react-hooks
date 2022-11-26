import useArray from "./useArray"

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, "two", 3, 'four', 5, 6,
  ])

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => push(0)}>Add 0</button>
      <button onClick={() => push(4)}>Add 4</button>

      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button onClick={() => remove(3)}>Remove fourth Element</button>

      <button onClick={() => filter(n => n < 3)}>
        filter Numbers Less Than 3
      </button>

      <button onClick={() => set([1, 2, 3, 5, 7, 9, 4, 6, 8])}>Set To new array [1, 2, 3, 5, 7, 9, 4, 6, 8]</button>
      
      <button onClick={clear}>Clear Array</button>
    </div>
  )
}