const arr = [];

arr[1] = '1';
arr[3] = 3;

console.log(arr.length);
console.log(arr); //[ <1 empty item>, '1', <1 empty item>, 3 ]
const arr2 = ['김성용', '종문님', '지형님'];

if (arr2.indexOf('종문님')) {
  arr2.push('예슬님');
}
console.log(arr2); // 김성용 종문님 지형님 예슬님

// if (arr2.indexOf('윤기님')) {
//   arr2.push('예슬님');
// }
// console.log(arr2); // 김성용 종문님 지형님 예슬님 에슬님
if (arr2.indexOf('종문님') >= 0) {
  arr2.push('예슬님');
}
console.log(arr2);

const phone = '010-1234-1234';

//문자열도 배열과 관련된 것들을 할 수 있다.
// 문자열은 유사배열로서 문자들의 배열이 되고, 배열과 관련된 기능들을 사용할 수 있다.
// console.log(phone.length); //13
// console.log(phone.split('-'));
console.log(phone.split('-').join('ㅎ'));
// console.log(phone.replaceAll('-', ''));

//내장함수 push
const arr3 = [1, 2, 3];
arr3.push(4, 5);
console.log(arr3);

//내장함수 concat

const arr4 = [1, 2];
const arr5 = [3, 4];

const result = arr4.concat(arr5);

console.log(result);
//concat은 인피니티 스크롤에 많이 사용됨.
//특정 배열에 인자로 들어온 배열을 덧붙일 때 사용한다. ex)인피니티 스크롤

const arr6 = [1, 2, 3, 4, 5];
const deleteE1 = arr6.pop();
console.log(deleteE1, arr6);

// shift , unshift

const arr7 = [1, 2, 3, 4];
arr7.unshift(5);
console.log(arr7);
arr7.shift();
console.log(arr7);

// slice(start,end)
// start번째 인덱스부터 시작하여 end 직쩐까지의 인덱스 요소만을 복사하여 반환

const apart = ['성용', '성경님', '지형님', '윤기님', '예슬님', '오수님'];
console.log(apart.slice(1, 4)); // 성경님,지형님, 윤기님
console.log(apart.slice(1)); //끝까지 있는 경우
console.log(apart.slice(1, 1));
console.log(apart.slice(-3));
//slice에서 마지막 index는 -1부터 표기하여 -2,-3,-4로 음수 형태로 감소하는 형식
//splice(start,deleteCount,item)
// item은 생략 가능하며 splice의 주 용도는 내가 원하는 요소를 삭제하기 위함
const deleteArray = apart.splice(1, 4, ['승용님', '호령님', '윤경님']);
console.log(deleteArray, apart);
console.log('apart[1][1]', apart[1][1]);
