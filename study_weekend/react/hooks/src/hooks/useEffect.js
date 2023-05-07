import React, { useEffect, useState } from 'react';
import TimerModal from './timer-modal';

const UseEffect = () => {
    const [isOpenTimerModal,setIsOpenTimerModal] =useState(true)
    useEffect(()=>{
        console.log("mount")
    },[]);
    return (
        <div>
            {isOpenTimerModal && <TimerModal/>}
            <button onClick={()=>setIsOpenTimerModal((prev)=>!prev)}>재실행</button>
        </div>
    );
};

export default UseEffect;