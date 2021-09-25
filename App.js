import { useState} from 'react';
import './App.css';

function App() {
  let [count,setCount]  = useState(0)

  let incrementCounter = () =>{
    setCount( count+1)
  }
  let decrementCounter = () =>{
     setCount(count-1)
  }
 return (
<>
  <h1 className ="title">Welcome to counter app</h1>
  <h2 className ="count">The count is:{count}</h2>
<button onClick={incrementCounter} className="increment-button">Increase</button>
  <button onClick={decrementCounter} className="decrement-button">Decrease</button>
  </>
  );
}
export default App;
