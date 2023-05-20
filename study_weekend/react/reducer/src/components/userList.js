import { useUserStore } from "../context/user"

function UserList({handleDeleteUser}){
    const [userList,setUserList] = useUserStore()




    return(
        <div>
            {userList.map((user,index)=>{
                return(
                <>
                    <div key={user.id}>
                        {index}.{user.name}
                    </div>
                    <button onClick={()=>{handleDeleteUser(user.id)}}>삭제</button>
                </>
            )
            })}
        </div>
    )

}

export default UserList