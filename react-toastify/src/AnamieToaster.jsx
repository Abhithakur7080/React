import React from 'react'
import "animate.css/animate.min.css";
import { toast, cssTransition } from "react-toastify";

const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });
  
  // https://animista.net/
  // source animation inside style.css
  const swirl = cssTransition({
    enter: "swirl-in-fwd",
    exit: "swirl-out-bck"
  });

const AnamieToaster = () => {
    function animateCss() {
        toast.dark("Hey 👋, see how easy!", {
          transition: bounce
        });
      }
    
      function animista() {
        toast.dark("Hey 👋, see how easy!", {
          transition: swirl
        });
      }
  return (
    <div>
        <button onClick={animateCss} id="animate.css">
            notify bounce
          </button>
          <button onClick={animista} id="animista">
            notify swirl
          </button>
    </div>
  )
}

export default AnamieToaster