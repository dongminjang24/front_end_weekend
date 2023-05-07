import React,{useState} from 'react';


function UseState(){
    let a = 0
    /* 
    const, let [변수명,바꿀 수 있는 순수함수] = useSate(기본 값)
    const/let 변수명 = 기본 값
    let a는 다시 재선언 되서 0으로 다시 콘솔로그 0찍히는데  
    state는 캐싱돼서 카운트된 값이 유지되어서  0으로 초기화가 안되고 캐싱값을 불러오는 것
    */
    // let count = 0
    const [count,setCount] = useState(0);

    const handleAddaNumber = ()=>{
        // count ++;
        setCount(count+1)
        console.log(count)
        a= 10
    }

    const handleMinusaNumber = (prev)=>{
        // count --;
        setCount(prev - 1); // Subtract 1 from the current count and update the state using the setCount function
        // console.log(count)
    }
    // console.log(count)
    console.log(a)
    return (
        <div>
            <button onClick={()=>handleAddaNumber()}>
                +
            </button>
            {count}
            <button onClick={()=>handleMinusaNumber(count)}>
                -
            </button>
        </div>
    )
}

export default UseState