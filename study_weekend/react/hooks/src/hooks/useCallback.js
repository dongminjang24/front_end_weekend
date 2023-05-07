import React,{useCallback, useState} from 'react';

const UseCallback = () => {
    const [count,setCount] =  useState(0)
    const onAddNumber = useCallback(()=>{
        console.log("test")
        setCount(count+1)
    },[])
    const onMinusNumber = useCallback(()=>{
        setCount(count-1)
    },[])
    return (
        <div>
            <button onClick={onAddNumber}>+</button>
            {count}
            <button onClick={onMinusNumber}>-</button>
        </div>
    );
};

export default UseCallback;