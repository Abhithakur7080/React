import React, { useState } from "react";

const initialState = {
  fname: "Abhijeet",
  lname: "Kumar",
};

const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);
  const changeName = () => {
    //this method not change person value on click
    // person.fname = 'Bruce'
    // person.lname = 'Wyne'
    // setPerson(person)

    //use this method
    const newPerson = {...person};
    newPerson.fname = 'Bruce'
    newPerson.lname = 'Wyne'
    setPerson(newPerson)
  }
  console.log("ObjectUseState Render");
  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};

export default ObjectUseState;
