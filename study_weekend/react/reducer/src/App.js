import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import reducer from './reducer/counter.reducer';
import User from './components';
import UserStoreProvider from './context/user';
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
    <UserStoreProvider>
      <div>
          <User></User>
        {/* <button onClick={handleIncreaseCont}>+</button>
        {count}
        <button  onClick={handleDecreaseCont}>-</button> */}
      </div>
    </UserStoreProvider>

  );
}

export default App;
