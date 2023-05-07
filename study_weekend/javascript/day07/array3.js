let dream = {
  name: '김성용',
  age: 20,
  height: 190
};

// 일반 객체는 이터러블한(순회 가능한)객체 일까요?
// 아닙니다. 순회가능함을 판단하는 것을 이터레이터라는 속성 값이
// 객체에 존재해야만 순회가능
// 따라서 일반 객체는 이터레이터가 존재하지 않고
// 이터러블하지 않은 객체를 반복하기 위해서
// 자바스크립트가 for문을 하나 만들어냅니다.(for in)
// 키값을 추출해서 모든 속성값을 접근할 수 있게 만든다.
// for (const key in dream) {
//   console.log(key);
// }

//순회 가능한 객체에서 사용할 수 있는 반복문
//순회 가능한 객체(Array,Map,set,Collection)
// 모든 요소를 순회해야하고, 인덱스가 필요하면 forEach를 사용
//
// const arr = [1, 2, 3, 4, 5];

// for (const key1 of arr) {
//   console.log(key1);
// }

//반드시 모든 요소에 순회해야하며, index가 필요할 때
// arr.forEach((el, index, originArr) => {
//   console.log(el);
// });
// 반드시 모든 요소를 순회해야하며, 요소의 값에만 접근 가능
// for (const el of arr) {
//   console.log(el);
// }
// for문은 모든 요소를 순회하지 않음 조건식,증감식 --> 내마음대로 설정
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {}
/*
Q. Array에서 철수라는 자료를 찾고 싶습니다

array에서 이름을 찾아주는 함수를 만들고 있습니다.
함수 안에 파라미터로 이름을 집어넣으면
그 이름이 출석부에 있으면 콘솔창에 출력해주는 함수를 만들어봅시다. 
어떻게 만들면 될까요? 

const 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(){
  //여기다 코드 
}


동작 예시 :

이름찾기('철수'); 라고 쓰면 콘솔창에 '있어요'라는 글자가 떠야합니다.
이름찾기('명수'); 라고 쓰면 콘솔창에 아무 글자도 뜨지 않아야합니다.


(조건) find, indexOf 같은 자바스크립트 기본함수들 사용금지
*/

const 출석부 = ['흥민', '영희', '철수', '재석'];
const 빈배열 = [];
function 이름찾기(find) {
  for (const name of 출석부) {
    if (name === find) {
      return console.log('있어요');
    } else {
      return console.log('없어요');
    }
  }

  // for (const name of 출석부) {
  //   if (name === find) {
  //     return 빈배열.push(1);
  //   } else {
  //     return 빈배열.push(0);
  //   }
  //   arr.reduce((a, b) => a + b, 0);
  // }

  if (출석부.includes(find) === true) {
    console.log('있어요');
  } else {
    console.log('없어요');
  }
}
// 이름찾기('철수'); // 있어요
// 이름찾기('명수'); //
// 이름찾기('영희'); //
// 이름찾기('재석'); //
이름찾기('동민');
// for(const i of 출석부) {
//   if(i === '철수')
//     console.log(i);
// }
