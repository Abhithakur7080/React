import React, { useState } from "react";
import ParentOne from "./ParentOne";
import ChildOne from "./ChildOne";

const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        GrandParent count - {newCount}
      </button>
      <ParentOne newCount={newCount}>
        <ChildOne />
      </ParentOne>
    </div>
  );
};

export default GrandParent;
