import React, { useState } from 'react';
import './index.css';
const DEFAULT_COLORS = ['red', 'blue', 'yellow', 'black'];

function App() {
  const [colors, setColors] = useState(DEFAULT_COLORS);

  const handleClick = () => {
    let last = colors.pop();
    colors.unshift(last);  
    setColors([ ...colors]);
    return colors;
  };
 
  return (
    <div>
      {
        <div class="clear">
          {colors.map((getcolor) => (
            <div className='elements' style={{ background: getcolor }}></div>
          ))}
        </div>
      }
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default App;
