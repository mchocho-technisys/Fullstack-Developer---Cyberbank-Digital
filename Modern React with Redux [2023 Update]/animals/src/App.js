import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      {animals && (
        <div className="animal-list">
          {animals.map((animal, index) => (
            <AnimalShow type={animal} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
