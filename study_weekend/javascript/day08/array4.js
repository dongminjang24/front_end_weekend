// 빌트인 객체
// 내장 객체
// 종류에는 네이티브 객체, -> object,number, array 객체 생성과 관련된 함수 객체와 메소드로 구성되어 있다.
// 호스트 객체 -> window,location,history,document(전역객체)

// Array.prototype.division = function () {};

// const arr = [1, 2, 3, 4, 5];
// arr.division();

// const obj = new Object();
// const obj2 = {};

// --> 자바스크립트에서 정의하지 않아도 편의성을 위하여 자체적으로 만들어둔 내장 기능
// console.log() 이 친구도 빌트인 객체
//도움을 주기 위해 만든 편리한 객체

// Array라고 하는 빌트인객체에서 모든 프로토타임 기능 사용가능
// 사전에 메서드를 만든 것이라고 생각하면됨

// 배열의 생성
// Array.from; // 유사 배열 객체
// 유사배열 객체: 객체이지만(Object) 배열과 관련된 속성값을 가지고 있는 객체
// let obj = {
//   0: '1',
//   1: '2',
//   length: 3
// };
// console.log(obj.length);
// console.log(obj[0]);
// console.log(obj);
// const array_1 = Array.from(obj);
// console.log(array_1);

// // 콜백함수가 return하는 값을 요소로 삼는 배열 생성
// const newArray_1 = Array.from({ length: 5 }, (el, index, originArr) => {
//   return index;
// });
// console.log(newArray_1);
// Array.of;
// ()인자로 들어온 값을 요소로 삼는 배열 생성
// const ofArr = Array.of(1, 2, 3); //[1,2,3]
// console.log(ofArr);
// // Array.fill;
// // fill(value,start,end)
// // end 인덱스 직전까지의 값을 채움
// const fillArr = Array(10).fill(1, 0, 9);
// console.log(fillArr);
// const fillArr2 = Array(10)
//   .fill()
//   .map((el, index) => {
//     return index;
//   });
// console.log(fillArr2);
// 배열 검사

Array.isArray([]); //true
Array.isArray(new Array()); //true
Array.isArray({}); //false
Array.isArray({ length: 2 }); // false
Array.isArray('Array');
