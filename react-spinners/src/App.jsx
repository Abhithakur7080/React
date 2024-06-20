import React from "react";
import "./App.css";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SyncLoader,
} from "react-spinners";

const App = () => {
  return (
    <div className="App">
      <BounceLoader size={24} color="red" loading />
      <BarLoader size={48} color="orange" loading />
      <BeatLoader size={72} color="maroon" loading />
      <CircleLoader size={72} color="maroon" loading />
      <ClimbingBoxLoader size={24} color="maroon" loading />
      <ClipLoader size={72} color="maroon" loading />
      <ClockLoader size={72} color="maroon" loading />
      <DotLoader size={72} color="maroon" loading />
      <FadeLoader size={72} color="maroon" loading />
      <GridLoader size={72} color="maroon" loading />
      <HashLoader size={72} color="maroon" loading />
      <MoonLoader size={72} color="maroon" loading />
      <PacmanLoader size={42} color="maroon" loading />
      <PropagateLoader size={72} color="maroon" loading />
      <PuffLoader size={72} color="maroon" loading />
      <PulseLoader size={72} color="maroon" loading />
      <RingLoader size={72} color="maroon" loading />
      <RiseLoader size={72} color="maroon" loading />
      <RotateLoader size={72} color="maroon" loading />
      <ScaleLoader size={72} color="maroon" loading />
      <SyncLoader size={72} color="maroon" loading />
    </div>
  );
};

export default App;

const style = {
  marginTop: 25,
  marginBottom: 25,
};
