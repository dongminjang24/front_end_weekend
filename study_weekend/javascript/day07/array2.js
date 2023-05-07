const arr = [
  {
    id: 1,
    productName: '컴퓨터',
    status: 1
  },
  {
    id: 2,
    productName: '노트북',
    status: 1
  },
  {
    id: 3,
    productName: '자동차',
    status: 1
  }
];

const result_2 = arr.every((product) => product.status === 0);

console.log(result_2);
//검사만 하고 싶을 때 모든것이 조건을 만족할 때 // true

//some 하나라도 있을 때
const result_3 = arr.some((product) => product.status === 0);

console.log(result_3);
