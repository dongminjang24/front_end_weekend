import React, { useMemo,useRef, useState } from 'react';

const UseMemo = () => {
    const [state,setState] = useState(false);
    const [state1,setState1] = useState(false);
    const arr = useRef([1,2,3,4]);
    const memoCount = useMemo(()=>{
        arr.current.push(arr.length+1)
        console.log(arr.current.length)
        return arr.current
    },[])
    /* 리렌더링은 되고 있지만 숫자는 늘어나지 않고,useMemo에서
    값은 갖고있고, 연산을 하지 않음. 최초의 값을 가지고 있음.
    */
    console.log("reRender")
    return (
        <div>
            {memoCount.length}
            <button onClick={()=>{setState1((prev)=>!prev)}}>+</button>
            <button onClick={()=>{setState((prev)=>{
                return !prev})}}>유지</button>
        </div>
    );
};

export default UseMemo;