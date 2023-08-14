import React from "react";
import ComponentA from "./Components/ComponentA";
import ErrorBoundary from "./Components/ErrorBoundary";
// import Timer from "./timer/Timer1";

class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state={
  //     timerOn: false
  //   }
  // }
  // // handleMount = () => {
  // //   this.setState((prevState) => ({mount: !prevState.mount}))
  // // }
  // handleTimerOn = () => {
  //   this.setState((prevState) => ({timerOn: !prevState.timerOn}));
  // }
  render() {
    return (
      <>
      <ErrorBoundary>
        <ComponentA/>
      </ErrorBoundary>
        
        {/* <Timer timerOn={this.state.timerOn}/>
        <button onClick={this.handleTimerOn}>{this.state.timerOn?"STOP":"START"}</button> */}
      </>
    );
  }
}

export default App;
