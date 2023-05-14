import logo from './logo.svg';
import './App.css';
import OneUse from './components/one-user';
import { useState } from 'react';
function App() {
  const [user,setUser] = useState([
    {id:1, name: '김성용'},
    {id:2, name: '김예슬'},
    {id:3, name: '장동민'},
    {id:4, name: '이지형'},
    {id:5,name: '주진용'},
])

 const handleAddName = ()=>{
    const AddName = prompt("어떤 이름을 추가하실래요?")
    const copyName = [...user,
      {name: AddName }
    ]
    setUser(copyName)
 }

 const handleDeleteName = ()=>{
  const DeleteName = prompt("어떤 이름을 삭제하실래요?")
  const copyName = [...user].filter((v) => v.name !== DeleteName )
  setUser(copyName)
}



  return (

    <div className="App">

      <OneUse user={user} setUser={setUser}></OneUse>
      <button onClick={()=>handleAddName()}>추가</button>
      <button onClick={()=>handleDeleteName()}>삭제</button>
      <button onClick={()=>handleDeleteName()}>수정</button>

      {/*
       * 유저목록
       * 1. 김성용님
       * 1. 김예슬님
       * 2. 장동민님
       * 3. 이지형님
       * 4. 주진용님
       * 사용자가 입력한 텍스트에 따라 유저의 목록이 추가되고, 가각의 유저는 수정 및 삭제할 수있다.
  */}
    </div>
  );
}

export default App;
