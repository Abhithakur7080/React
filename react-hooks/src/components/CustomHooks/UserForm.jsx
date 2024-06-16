import React, { useState } from "react";
import useInput from "./hooks/useInput";

const UserForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            {...bindFirstName}
          />
        </div>
        <div>
          <label htmlFor="lname">last Name</label>
          <input
            type="text"
            id="lname"
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            {...bindLastName}
          />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
