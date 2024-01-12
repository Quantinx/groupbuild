import "./App.css";
import people from "./data.json";
import CountButton from "./components/CountButton";
import { useState } from "react";
import { useEffect } from "react";
import NameCard from "./components/NameCard";
function App() {
  const [count, setCount] = useState(0);
  const [filteredPeople, setFilteredPeople] = useState(people);
  function handleAdd() {
    if (count >= people.length) {
      return;
    }
    setCount(count + 1);
  }

  function handleSubtract() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }

  useEffect(() => {
    setFilteredPeople(people.slice(0, count));
  }, [count]);

  return (
    <div>
      <CountButton text="Add" buttonClick={handleAdd} />
      <CountButton text="Subtract" buttonClick={handleSubtract} />
      <div>Count: {count}</div>

      <div className="card-container">
        {filteredPeople.map((human) => {
          return <NameCard person={human} key={human.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
