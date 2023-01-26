import { useState } from 'react';
import './App.css';
import Section1 from './component/Section1';
import Section2 from './component/Section2';

function App() {

  const [nextVideo, setNext] = useState(false)
  return (
    <div>
      {
        nextVideo === false ? <Section1 setNext={setNext} /> :
          <Section2/>
      }
    </div>
  );
}

export default App;
