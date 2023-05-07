import React,{useEffect, useState} from 'react';

const TimerModal = () => {
    let memo = 0;
    const [count,setCount] = useState(0)
    useEffect(()=>{
        memo =5;
        console.log("timer mount!")
    },[])
    return (
        <div>
            {count}
        </div>
    );
};

export default TimerModal;