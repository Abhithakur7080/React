// Complete the HomePage Component and export it
import {Form} from "./Form";
import React from "react";

let nameRef = React.createRef();
let emailRef = React.createRef();
let name = "YourName";
let email = "xyz@pqr.com";

function HomePage() {
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1>HomePage</h1>
      <Form/>
    </div>
  );
}
export default HomePage;
export {name, email};