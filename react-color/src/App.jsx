import React, { useState } from "react";
import {
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker,
} from "react-color";

//visit: https://casesandberg.github.io/react-color/
const App = () => {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowColorPicker((show) => !show)}>
        {showColorPicker ? "Hide" : "Show"}
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        {showColorPicker && (
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <SketchPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <SwatchesPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <PhotoshopPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <GithubPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <BlockPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <TwitterPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <CirclePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <SliderPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <CompactPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
        {showColorPicker && (
          <MaterialPicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}
      </div>
      <h2>You Picked: {color}</h2>
    </div>
  );
};

export default App;
