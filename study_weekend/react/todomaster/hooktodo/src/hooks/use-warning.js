import React, { useState, useEffect,useRef } from 'react';

const useWarning = (email,password,passwordConfirm) => {
    const [errors,setErrors] = useState({})
    const [emailPc,setCheckEmail] = useState()
    const [passwordPc,setCheckPassword] = useState()
    const [passwordConfirmPc, setPasswordConfirmPc] = useState()
    useEffect(()=>{

        if (email.length===0) {
            setErrors((prev) => ({
                ...prev,
                email: {
                    message:null
                }
            }))   
        }
        else if ((email.includes("@")===false)) {
            setErrors((prev) => ({
                ...prev,
                email: {
                    message: "올바른 이메일을 입력해주세요."
                }
            }))
            setCheckEmail(false)

        } 
     
        else {
            setErrors((prev) => ({
                ...prev,
                email: {
                    message:null
                }
            }))
            setCheckEmail(true)
        }
        if (((password.length)< 8)&&(password.length>=1)) {
            setErrors((prev) => ({
                ...prev,
                password: {
                    message: "비밀번호가 8자리이상이어야 합니다."
                }
            }),
            )
            setCheckPassword(false)
        }
           else if ((password.length===0)) {
                setErrors((prev) => ({
                    ...prev,
                    password: {
                        message: null
                    }
                }),
                )
                setCheckPassword(false)
        } else {
            setErrors((prev) => ({
                ...prev,
                password: {
                    message: null
                }
            }))
            setCheckPassword(true)
        }
       
     



        if (password !== passwordConfirm){
            setErrors((prev) => ({
                ...prev,
                passwordConfirm: {
                    message: "비밀번호가 일치하지 않습니다."
                }
            }))
            setPasswordConfirmPc(false)
        } else {
            setErrors((prev) => ({
                ...prev,
                passwordConfirm: {
                    message: null
                }
            }))
            setPasswordConfirmPc(true)
        }

      

    }, [email, password, passwordConfirm])

    return [errors, emailPc,passwordPc, passwordConfirmPc]
}

export default useWarning;
