import React, { useEffect, useState } from 'react';
import TimerModal from './timer-modal';

const UseEffect = () => {
    const [isOpenTimerModal,setIsOpenTimerModal] =useState(true)
    useEffect(()=>{
        console.log("mount")
    },[isOpenTimerModal]);
    return (
        <div>
            {isOpenTimerModal && <TimerModal/>}
            <button onClick={()=>{
                console.log(isOpenTimerModal)
                setIsOpenTimerModal((prev)=>!prev)}}>재실행</button>
        </div>
    );
};

export default UseEffect;

/* 
1) 페이지가 mount 되었을때 실행 = window.onload
2) state는 비동기로 동작 -> state 변화 이후 실행할 effect 관리
3)
*/