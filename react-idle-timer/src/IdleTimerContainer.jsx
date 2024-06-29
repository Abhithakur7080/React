import React, { useState, useRef } from "react";
import { useIdleTimer } from 'react-idle-timer';
import Modal from "react-modal";

Modal.setAppElement("#root");

function IdleTimerContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const sessionTimeoutRef = useRef(null);

  const handleIdle = () => {
    console.log("User is idle");
    setModalIsOpen(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User has been logged out");
  };
  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User is active");
  };

  const { getRemainingTime, getLastIdleTime, getIdleState } = useIdleTimer({
    timeout: 10000, // 10 seconds
    onIdle: handleIdle,
  });

  const startTimeout = () => {
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  return (
    <div>
      {isLoggedIn? <h2>Hello Abhijeet</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={modalIsOpen}>
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={() => {
            stayActive();
            startTimeout();
          }}>Keep me signed in</button>
          <button onClick={() => {
            logOut();
            setModalIsOpen(false);
          }}>Log me out</button>
        </div>
      </Modal>
    </div>
  );
}

export default IdleTimerContainer;