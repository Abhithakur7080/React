import Login from "./Components/Login";
import Reset from "./Components/Reset";

import { useState } from "react";

function App() {
  const [form, setForm] = useState("login");

  return (
    <div className="App">
      <h1>Welcome!</h1>
      {form === "login" ? <Login /> : <Reset />}
      <button
        onClick={() => {
          setForm(form === "login" ? "reset" : "login");
        }}
      >
        {form === "login" ? "Forgot Password" : "Back to Login"}
      </button>
    </div>
  );
}

export default App;
