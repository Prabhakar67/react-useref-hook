import { useRef } from 'react';
import './App.css';
import Component1 from './Components/Component1'

function App() {
  let thisEl = useRef('');
  // console.log(thisEl);
  return (
    <div ref={thisEl} className="App">
      <Component1 el={thisEl} name={'Alex Hales'} />
    </div>
  );
}

export default App;
