const arr =['arr','arr','arr','set','set','map']
let set = new Set(arr);
console.log(set)
console.log(set.add('헤이').add('헤이'))

/* 배열 map,filter
 arr.map().filter().find()
 메서드 체이닝
 가독성은 높지만, 속도가 빠름
*/

const setArr =Array.from(set)
/* set은 유사배열이다. */
const spreadSet = [...set]
/* set은 이터러블한 자료구조이다.
이터러블함.*/