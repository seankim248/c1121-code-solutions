import { React, useState } from 'react';

const HotButton = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  if (counter <= 3) {
    return (
      <div>
        {counter}
        <button onClick={increment}>Hot Button</button>
      </div>
    );
  }

};

export default HotButton;
