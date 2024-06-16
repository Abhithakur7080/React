import React, { useState } from "react";

const initialState = ["Abhijeet", "kumar"];

const ArrayUseState = () => {
  const [persons, setPersons] = useState(initialState);
  const handleClick = () => {
    //this method not change persons value on click
    // persons.push("Bruce");
    // persons.push("Wyne");
    // setPersons(persons);

    //use this method
    const newPersons = [...persons]
    newPersons.push("Bruce");
    newPersons.push("Wyne");
    setPersons(newPersons);
  };
  console.log("ArrayUseState Render");
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};

export default ArrayUseState;
