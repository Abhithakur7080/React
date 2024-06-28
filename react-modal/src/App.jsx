import React, { useState } from "react";
import "./App.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
const App = () => {
  const [modelOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal isOpen={modelOpen} onRequestClose={() => setIsOpen(false)} style={
        {
          overlay: {
            backgroundColor: "gray"
          },
          content: {
            color: "yellow"
          }
        }
      }
        className={"bg-green"}>
        <h1>Modal Title</h1>
        <p>Modal Body</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default App;
