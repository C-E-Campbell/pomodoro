import { useState, useEffect } from 'react';
import moment from 'moment';

function App() {
  const [start25, setStart25] = useState(0);
  const [end25, setEnd25] = useState(0);

  const start25Timer = () => {
    const newStartTime = moment().unix();
    const endTime = moment().add(25, 'm').unix();
    setStart25(newStartTime);
    setEnd25(endTime);
  };

  return (
    <div>
      <button
        onClick={() => {
          start25Timer();
        }}
      >
        Start
      </button>
    </div>
  );
}

export default App;
