import React,{useEffect, useState} from 'react';

const TimerModal = () => {
    let memo = 0;
    const [count,setCount] = useState(0)
    useEffect(()=>{
        memo =5;
        console.log("timer mount!")
        let interval = setInterval(()=>{setCount((prev)=>prev+1)},1000)
        return () =>{
            clearInterval(interval)
            console.log("timer unmount")
        }
    },[])
    return (
        <div>
            {count}
        </div>
    );
};

export default TimerModal;

/* 
useEffect와 useMemo의 가장 큰 차이점은 값을 캐싱하느냐이다.

만약 특정 값 캐싱을 위해 ref 와 effect를 사용하면
메모리 및 퍼포먼스의 낭비(누수) 따라서 내가 특정한 값을
연산하여 캐싱하고 싶을때는 useMemo를 사용하는 것이 좋다.
*/