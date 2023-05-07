// let obj  ={
//     name:'김성용'
// }
//얕은 복사
// let obj2 = obj;

// obj2.name='장동민'

// console.log(obj.name);


//깊은 복사

// let obj2 = {...obj};

// obj2.name='장동민'

// console.log(obj.name);
// console.log(obj2.name);


// 전개 연산자
const a = {name:'김성용'}

// 전개: 펼치는 것

const d = {...a};  //새 객체를 의미,…은 내용물을 그대로 펼친 것

const arr = [1,2,3,4,5]

const e =[...arr];

// 내용물을 전개하는것
//object assign
const obj =Object.assign({},Object.assign({},Object.assign({},Object.assign({}, a))))
console.log(obj);