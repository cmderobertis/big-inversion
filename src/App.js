import PersonCard from "./components/PersonCard"
import "./App.css"

function App() {
  const people = [
    { firstName: "John", lastName: "Smith", age: 88, hairColor: "Green" },
    { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Blonde" },
    { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Blue" },
    { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Black" },
  ]
  return (
    <div className="App">
      {people.map((person) => (
        <PersonCard
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor}
        />
      ))}
    </div>
  )
}

export default App
