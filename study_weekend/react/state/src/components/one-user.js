import React from 'react';
import { useState } from 'react';
const OneUse = ({user,setUser}) => {
   
    const handleRevise = (id)=>{
        const revName = prompt('이름 수정')
        const copy = [...user]
        const findCopy =copy.find((v)=>v.id ===id)
        findCopy.name = revName
        setUser(copy)
    }
    
    return (
        <div>
            {user.map((v)=>{
                return (
                    <>
                        <li>{v.name}</li> <button onClick={()=>handleRevise(v.id)}>수정</button>
                    </>
            )
            })}
        </div>
    );
};

export default OneUse;