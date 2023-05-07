const arr1 = [5, 3, 23, 2, 1, 4, 9];
arr1.sort((a, b) => a - b);
arr1.sort((a, b) => b - a);
// 둘다됨
console.log(arr1);

// 익명함수;

// function(){

// }

// () => {return a}
// () => a* return 생략 리턴이 한줄이면 생략가능

const users = [
  { id: 1, name: '김예슬' },
  { id: 2, name: '이지형' },
  { id: 3, name: '홍윤기' }
];

const newUsers = users.map((users, index) => {
  return {
    id: users.id,
    name: users.name,
    nick: `성용이와 아이들${index + 1}`
  };
});

const newUsers2 = users.map((users, index) => {
  return {
    ...users,
    nick: `성용이와 아이들${index + 1}`
  };
});

const newUsers3 = users.filter((user) => user.id !== 3);

// console.log(newUsers);
// console.log(newUsers2);
// console.log(newUsers3);

const newUser4 = users.find((user) => user.id === 1);
console.log(newUser4);

const newUsers5 = users.map((_, index) => {
  return {
    id: users.id,
    name: users.name,
    nick: `성용이와 아이들${index + 1}`
  };
});

const newUsersIndex = users.findIndex((user) => user.id === 3);

console.log(newUsersIndex);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 누적값, 현재요소, 인덱스 , 원본 배열
let result = numArr.reduce((sum, n, index, originArr) => {
  return sum + n;
}, 10);

console.log(result);
// reduce의 끝에는 기본값을 부여할 수 있는데
// 현재 코드에서는 기본 값 5를 부여했다 만약 기본값을 5를 부여했을 때 처음 n의 값은 5가 된다.
// 그러나 만약에 기본 값이 없다면 배열의 첫 요소를 n으로 부여한다.
