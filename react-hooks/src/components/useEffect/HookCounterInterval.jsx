import React, { useEffect, useState } from "react";

const HookCounterInterval = (someProp) => {
  const [count, setCount] = useState(0);
  const tick = () => setCount(count + 1);


  useEffect(() => {
    const doSometing = () => {
        console.log(someProp);
      }
    doSometing()
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <h1>{count}</h1>;
};

export default HookCounterInterval;
