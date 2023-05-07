let num1 = 100;
let num2 = 50;

function f1() {
  console.log(num1); //100
  function f11() {
    let num2 = 100;
    console.log(num1, num2); // 100,100
  }
}

function f2() {
  num1 = 250;
}

function f3() {
  let num1 = 100;
  let num3 = 50;
  num1 = 300;
  console.log(num1); //100
}

console.log(num1); //100
f1(); //100,
//100,100
f2(); //안나옴
console.log(num1); //250
f3(); //300
console.log(num1); //250
console.log(num3); //undefined
