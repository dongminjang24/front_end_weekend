const user = {
  name: '김성용',
  age: 20,
  height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

/* 
(1) user[”key”], user.key
*/
// console.log(user["key"]);
// console.log(user.key);
// console.log(user["name"]);
// console.log(user.name);
// console.log(user["age"]);
// console.log(user.age);
// console.log(user["height"]);
// console.log(user.height);
// key를 활용하여 value를 도출해내는 방법

/* 
(2) Object.keys()
*/
/* 
(3) Object.values()
(4) Object.entries()
(5) for in
*/
console.log(Object.keys(user))
console.log(Object.values(user))
// console.log(Object.entries(user))
// for (let a in user){
//   console.log(a)
// }



// 문제2. 값이 “김성용”인 속성의 key 찾기
const a = Object.keys(user).find(v => user[v] == '김성용')
console.log(a);
// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정
const copyUser = {...user}
copyUser.name='동민'
console.log("real",user);
console.log("copy",copyUser);