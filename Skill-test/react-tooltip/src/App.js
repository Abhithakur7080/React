import './App.css';
import { useState } from 'react';
import { Tooltip } from './tooltip';

function App() {
  const [position, setPosition] = useState("top");
  const [hovering, setHovering] = useState(false);

  const handlePos = (pos) => {
    setPosition(pos);
  }

  const handleMouseOver = () => {
    setHovering(true);
  }

  const handleMouseLeave = () => {
    setHovering(false);
  }
  return (
    <div className="App">
      <Tooltip
      handlePos={handlePos}
      handleMouseLeave={handleMouseLeave}
      handleMouseOver={handleMouseOver}
      position={position}
      hovering={hovering}
      />
    </div>
  );
}

export default App;
