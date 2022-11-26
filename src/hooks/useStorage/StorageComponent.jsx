import { useSessionStorage, useLocalStorage } from "./useStorage"

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage("name", "Gautam")
  const [age, setAge, removeAge] = useLocalStorage("age", 21)

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("Rajesh")}>Set Name to sessionStorage</button>
      <button onClick={() => setAge(48)}>Set Age to localStorage</button>
      <button onClick={removeName}>Remove Name from sessionStorage</button>
      <button onClick={removeAge}>Remove Age from localStorage</button>
    </div>
  )
}