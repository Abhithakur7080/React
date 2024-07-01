import React from "react";
import ReactPlayer from "react-player";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ReactPlayer
        width={480}
        height={240}
        controls
        url={"https://youtu.be/6DfaBq2rVoE?si=upmy8-wwpg-QmsTG"}
        onReady={() => console.log("onReady Callback")}
        onStart={() => console.log("onStart Callback")}
        onPause={() => console.log("onPause Callback")}
        onEnded={() => console.log("onEnded Callback")}
        onError={() => console.log("onError Callback")}
      ></ReactPlayer>
      <ReactPlayer
        width={480}
        height={240}
        controls
        url={"https://youtu.be/VVBziwNCHq8?si=ie9jNL0ivzcNA5Vb"}
        onReady={() => console.log("onReady Callback")}
        onStart={() => console.log("onStart Callback")}
        onPause={() => console.log("onPause Callback")}
        onEnded={() => console.log("onEnded Callback")}
        onError={() => console.log("onError Callback")}
      ></ReactPlayer>
    </div>
  );
};

export default App;
