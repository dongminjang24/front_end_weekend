// 자판기라는 함수를 정의

// 자판의 함수는 처음에 실행되었을 때 자판기가 가동되었습니다가 출력
// 자판기 함수의 파라미터로는 coin,menu

// 자판기의 함수의 반환값은

// 잔돈이 있으면, 음료수 이름과 잔돈을 반환

// 음료수보다 금액이 적을 경우 금액이 부족합니다. 반환

// 없는 메뉴를 파라미터로 전달하였을때는 존재하지 않는 상품입니다. 반환

// 메뉴
// 솔의눈 : 300원 , 비타 500 : 500원, 콜라: 1000원

let machineMenu = {
  솔의눈: 300,
  비타500: 500,
  콜라: 1000
};
// if (!selected) return console.log('없는 제품입니다.') 이런식으로 해야함
// if (coin<selectedPrice) return console.log('금액 부족') 이런식으로 해야함

// early return 예외 상황때 빠르게 해당함수를 종료하여 아래로직을 실행하지 않기 위함
function machine(coin, menu) {
  console.log('자판기가 가동되었습니다.');
  let change = coin - machineMenu[menu];
  if (change >= 0) {
    return console.log(menu, change);
  } else if (change < 0) {
    return console.log('금액이 부족합니다.');
  } else if (machineMenu.hasOwnProperty(menu) == false) {
    return console.log('존재하지 않는 상품입니다.');
  }
}
machine(2230, '콜라');
console.log(machineMenu.콜라);

console.log('------------------');
function phoneNumber(phone) {
  let abc = phone.split('-');
  abc.splice(1, 1, '****');
  abc = abc.join('-');
  return abc;
}
let number = '010-5786-2039';
number_2 = number.substring(4, 8);
// console.log(phoneNumber('010-2343-2343'));
console.log(number_2);

const newArr = Array.from(number);
console.log(newArr);
console.log(newArr.splice(4, 4, '****'));

console.log(newArr.join(''));

console.log(number.replace(4, 8, '****'));
