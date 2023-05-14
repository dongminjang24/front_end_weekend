import React from 'react';
import { useEffect } from 'react';
const useAuthValidation = (email,password,passwordConfirm) => {
    useEffect(()=>{
      if(email.include('@')&&(password.length>=8)&&(password===passwordConfirm)){
        return true
      }

    },[email,password,passwordConfirm])
};

export default useAuthValidation;