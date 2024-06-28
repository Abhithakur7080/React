import React from "react";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippy.js/react";
import "./App.css";

const ColoredTooltip = () => (
  <span style={{color: "yellow"}}>Colored Component</span>
)
const CustomChild = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  )
})
const App = () => {
  return (
    <div className="App">
      <div style={{ paddingBottom: 20 }}>
        <Tippy content={"Basic tooltip"} placement="right">
          <button>Hover me</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Tippy content={"No Arrow tooltip"} arrow={false} >
          <button>Hover me</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Tippy content={"Delayed tooltip"} arrow={false} delay={1000}>
          <button>Hover me</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Tippy content={<span style={{color: "orange"}}>Colored</span>} >
          <button>Hover me</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Tippy content={<ColoredTooltip/>}>
          <button>Hover me</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: 20 }}>
        <Tippy content={<ColoredTooltip/>} placement="top-start">
          <CustomChild/>
        </Tippy>
      </div>
    </div>
  );
};

export default App;
