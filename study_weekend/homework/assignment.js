// const a = [5, 20, 3, 11, 23];
// console.log(
//   a.sort(function compare(a, b) {
//     return b - a;
//   })
// );
// function sort(arr) {
//   let maxNum;
//   let object;
//   sort_arr = arr.sort(function compare(a, b) {
//     return b - a;
//   });
//   //   sort_arr = sort_arr.reverse();
//   maxNum = Math.max(...a);
//   object = {
//     maxValue: maxNum,
//     sortArr: sort_arr
//   };
//   console.log(object);
// }
//console.log
// console.log(sort(a));

console.log('------------------');
// let productObject = {
//   야채곱창: 5,
//   바나나우유: 10,
//   삼각김밥: 15,
//   도시락: 10,
//   샌드위치: 10
// };
// console.log(productObject.야채곱창 == 5);
// function check(productName, size) {
//   if (Object.keys(productObject).includes(productName) == false) return console.log(productName);
//   if (productObject[productName] == size) return console.log('전산표와 일치합니다.');
//   if (productObject[productName] != size) return console.log('전산표와 일치하지 않습니다.');
// }

// check('바나나1우유', 10);
console.log('------------------');

// const arr = [12, 52, 33, 24, 15];
// function arrHandling(arr, number) {
//   let arrPlus;
//   arrPlus = arr.map((v) => {
//     return v + 10;
//   });

//   // 원소 'b' 삭제
//   let filtered;
//   filtered = arrPlus.filter((element) => element !== number);
//   if (arrPlus.includes(number) == false) return '결과값이 없습니다';
//   if (arrPlus.includes(number)) return filtered;
// }

// const a = arrHandling(arr, 25);

// console.log(a);

console.log('------------------');

// const arr = [1, 2, 3, 4, 5, 2, 3, 4, 5, 4];

// function solution(arr) {
//   let evenI;
//   evenI = 0;
//   let oddI;
//   oddI = 0;

//   let newArray;

//   arr.forEach((v) => {
//     if (v % 2 == 0) evenI += 1;
//     if (v % 2 == 1) oddI += 1;
//   });
//   newArray = [evenI, oddI];
//   return newArray;
// }

// const a = solution(arr);
// console.log(a);

console.log('------------------');

function car(distance) {
  let firstDist = distance;

  function turnOn() {
    console.log('시동이 켜졌습니다.');
  }
  function turnOff() {
    console.log('시동이 꺼졌습니다.');
  }
  function drive() {
    console.log(leftDist + `km`);
  }
}

const myCar = car(50);
myCar.start(); // 시동이 걸렸습니다.
myCar.drive(); // 1km 주행했습니다.
myCar.drive(); // 2km 주행했습니다.
myCar.drive(); // 3km 주행했습니다.
myCar.start(); // 시동이 이미 걸려 있습니다.
myCar.drive(); // 4km 주행했습니다.
// ...
myCar.drive(); // 40km 주행했습니다.
myCar.drive(); // 주행 중 안전 위험으로 시동을 종료합니다.
myCar.stop(); // 시동이 꺼졌습니다.
