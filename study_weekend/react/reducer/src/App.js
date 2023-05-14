import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import reducer from './reducer/counter.reducer';
function App() {
  const [count,dispatch] = useReducer(reducer,0)

  const handleIncreaseCont =()=>{
    // setCount((prev)=>
    //   prev +1
    // )
    dispatch({
      type:'INCREASE'
    })
  }

    const handleDecreaseCont =()=>{
    //     setCount((prev)=>
    //   prev -1
    // )
    dispatch({
      type:'DECREMENT'
    })
    }

  return (
    <div>
      <button onClick={handleIncreaseCont}>+</button>
      {count}
      <button  onClick={handleDecreaseCont}>-</button>
    </div>
  );
}

export default App;
