import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AnamieToaster from "./AnamieToaster";
const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!!!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};
const App = () => {
  const notify = () => {
    // toast(message, configuration)
    toast("Basic notification", { position: "top-left" });
    toast.success("Success notification", {
      position: "top-center",
      autoClose: 8000,
    });
    toast.info("Info notification", {
      position: "top-right",
      autoClose: false,
    });
    toast.warn("Warn notification", {
      position: "bottom-left",
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: true,
    });
    toast.error("Error notification", {
      position: "bottom-center",
      isLoading: true,
    });
    toast(<CustomToast />, { position: "bottom-right" });
  };
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
      <AnamieToaster />
      <ToastContainer />
    </div>
  );
};

export default App;
