import { useState,useReducer } from "react"
import AddUser from "./addUser"
import UserList from "./userList"
import { useUserStore } from "../context/user"
import { ACTION_TYPE } from "../consts/action"
// import { DELETE } from "../utils/user"

function User(){
    const [userList,dispatch] = useUserStore()
    
    const handleAddUser = (e)=>{
        // const inputValue = {id:Math.floor(Math.random()*100000000),name:e.target.user.value}
        // setUserList([...userList,inputValue])
        dispatch({
            type:ACTION_TYPE.ADD,
            payload: e
          })
    }
 

    const handleDeleteUser =(id)=>{
        // const filterUser = userList.filter((user)=> user.id !==id)
        // setUserList(filterUser)
        dispatch({
            type:ACTION_TYPE.DELETE,
            payload: id

          })
        //dispatch(Delete(id))

    }
    /* 추가 버튼을 누르면 유저가추가되어야하고,
    삭제버튼을 누르면 유저가 삭제되는 함수를 넣기
    */

    return(
        <>
            <UserList userList={userList} handleDeleteUser={handleDeleteUser}></UserList>
            <AddUser handleAddUser={handleAddUser}></AddUser>
        </>
    )

}

export default User