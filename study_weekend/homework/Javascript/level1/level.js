import { BANK_LIST, ACCOUNT_FORM } from './account.js';

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

const selectInput = document.querySelector('#bank-selector')
const container = document.querySelector('#account-list')
for(let a in BANK_LIST){
    let option = document.createElement('option');
    option.innerHTML = `
    ${BANK_LIST[a]}
   `;
   selectInput.appendChild(option)
}
const inputValue = document.querySelector('#account-input')
// console.log(inputValue)
// const btn = document.getElementsByTagName('button')
// let btnArr = Array.from(btn)
// key = 123412341234
const formSubmit = document.querySelector('#account-send-form')
const keysOfBank= Object.keys(BANK_LIST)
const valuesOfBank= Object.values(BANK_LIST)
// console.log(valuesOfBank[1])

console.log(keysOfBank[1])
formSubmit.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (inputValue.value.length === 12){
    let key = keysOfBank.find((key)=> BANK_LIST[key] === selectInput.value)
    let arrNumber = ACCOUNT_FORM[key].split('-')
    let result = String(inputValue.value).replace(/([\d|*]{2})([\d|*]+)([\d|*]{2})/, '$1********$3');
    let regTest=''
    for (let i=0;i <= (arrNumber.length-1); i++){
      regTest +=`([\\d|*]{`+ arrNumber[i].length+`})`
    }
    console.log(result)
    console.log(regTest)
    let pattern = new RegExp(regTest, 'gi');
    let string='$1'
    for (let i=1;i < (arrNumber.length); i++){
      string += "-$"+(i+1)
    }
    let resultResult = result.replace(pattern,string)
    console.log(resultResult)
    let li = document.createElement('li');
    li.innerHTML = `
        ${selectInput.value} : ${resultResult}
    `;
    container.appendChild(li);}
    else{
        alert('12자리를 입력해주세요.')
  }
}
)