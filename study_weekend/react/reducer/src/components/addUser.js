import { useState } from "react"

function AddUser({handleAddUser}){
   

    return(
        <div>
            <form onSubmit={handleAddUser}>
                <input name={"user"} type="text"/>
                <button>추가하기</button>
            </form>
        </div>
    )

}

export default AddUser