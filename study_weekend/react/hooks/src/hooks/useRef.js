import React,{useRef, useState} from 'react';

const UseRef = () => {
    const count = useRef(0)
    const htmlRef =  useRef(null)
    // useRef에 담기는 값은 객체로서 current 속성에 담긴다.
    // 리렌더링 되어도 값을 유지(캐싱) 상태는 아니기에 ref의 값이 변해도 리렌더는 되지않음
    // 클로저는 만들어진 함수를 기억한다는 것.
    // 렌더링이 되지 않아도 값은 캐싱하고 있음.
    const [forceReRender,setForceReRender] =  useState(true)
    console.log("REF!!!!!!",htmlRef)
    const onChangeUseRef=()=>{
        htmlRef.current.style.color ='red'
        count.current +=1;
        console.log(count.current)
    }
    const onForceReRender = ()=>{
        setForceReRender((prev)=>
        {return !prev})
    }
    console.log(count.current)
    return (
        <div>
            <div>{forceReRender&& 'show'}</div>
            <div ref={htmlRef}>COLORS</div>
            <div>{count.current}</div>
            <button onClick={onChangeUseRef}>카운트 추가</button>
            <button onClick={onForceReRender}>리렌더링</button>
        </div>
    );
};

export default UseRef;