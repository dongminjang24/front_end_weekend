import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
    

*/

let result

const formContainer = document.querySelector('form')
const rightList = document.getElementById('reservation-number')

formContainer.addEventListener('submit',(e)=>{
    rightList.innerHTML=''
    e.preventDefault()
    const inputName = formContainer.querySelector('input[name="user-name"]').value
    const inputPhone = formContainer.querySelector('input[name="user-phone"]').value
    
   for(let checkList of RESERVATION_LIST){
    // console.log(checkList)
    if ((checkList.name== inputName)&&(checkList.phone== inputPhone)){
        rightList.innerHTML=`${checkList.number}`
        break   
    } 
   
   }
   if(rightList.innerHTML===''){
        alert('고객정보가 일치하지 않습니다.')
        rightList.innerHTML=`고객정보가 일치하지 않습니다.`
   }
})

// console.log(result)
