import { useState, useEffect } from 'react';

function App2() {
  const [color, setColor] = useState("blue");

  const click = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="App">
      <button onClick={() => click("yellow")}>
        Change BG Color 
      </button>
    </div>
  );
}

export default App2;