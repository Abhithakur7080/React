import React from "react";
import "./App.css";
import UseState from "./components/useState/UseState";
import UseReducer from "./components/useReducer/UseReducer";
import ObjectUseState from "./components/immutable state/ObjectUseState";
import ArrayUseState from "./components/immutable state/ArrayUseState";
import Parent from "./components/Parent Child/Parent";
import ParentOne from "./components/optimazation/ParentOne";
import ChildOne from "./components/optimazation/ChildOne";
import GrandParent from "./components/optimazation/GrandParent";
import ParentTwo from "./components/optimazation/ParentTwo";
import ParentThree from "./components/incorrect optimization/ParentThree";
import ParentFour from "./components/incorrect optimization/ParentFour";
import ParentFive from "./components/incorrect optimization/ParentFive";
import ParentSix from "./components/incorrect optimization/ParentSix";
import ContextParent from "./components/context/ContextParent";

const App = () => {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <ObjectUseState/> */}
      {/* <ArrayUseState /> */}
      {/* <Parent/> */}
      {/* <ParentOne /> */}
      {/* <GrandParent/> */}
      {/* <ParentTwo/> */}
      {/* <ParentThree/> */}
      {/* <ParentFour/> */}
      {/* <ParentFive/> */}
      {/* <ParentSix/> */}
      <ContextParent/>
    </div>
  );
};

export default App;
