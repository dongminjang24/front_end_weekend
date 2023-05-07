import React, { useEffect, useState } from 'react';
import TimerModal from './timer-modal';

const UseEffect = () => {
    const [isOpenTimerModal,setIsOpenTimerModal] =useState(true)
    useEffect(()=>{
        if (!isOpenTimerModal) return;
        console.log("mount")
        console.log("real",isOpenTimerModal)

    },[isOpenTimerModal]);
    return (
        <div>
            {isOpenTimerModal && <TimerModal/>}
            <button onClick={()=>{
                // console.log(isOpenTimerModal)
                setIsOpenTimerModal((prev)=>!prev)}}>재실행</button>
        </div>
    );
};

export default UseEffect;

/* 
1) 페이지가 mount 되었을때 실행 = window.onload
2) state는 비동기로 동작 -> state 변화 이후 실행할 effect 관리
3) 페이지가 unmount 될 때는 return을 사용하여 컴포넌트가 돔에서 제거되었을때 실행할 effect를 관리
4)
*/