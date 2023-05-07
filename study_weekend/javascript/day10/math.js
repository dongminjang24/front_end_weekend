console.log(Math.max(1, 2, 3, 4, 5, 6, ))
console.log(Math.min(1, 2, 3, 4, 5, 6, ))

const a =[1,2,3,4,5,5,6,7]
//Math.max(a) //NaN
console.log(Math.max(...a))

console.log(Math.round(4.5))
console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))
console.log(Math.random()) // 0~0.999999
console.log(Math.random() * 100) // 0~100

console.log(Math.random() * 100+1) // 0~100
console.log(Math.floor(Math.random() * 100+1)) // 1
console.clear()
//과제 로또 번호 뽑기
// 랜덤 로또 번호 1~45
// 매번 실행마다 다른 로또 번호가 나와야합니다.
// console.log(Math.floor(Math.random() * 45+1))
let lotto = []
let numberLotto
for (let i = 0;i<6;i++){
    numberLotto = Math.floor(Math.random() * 45+1)
    if (lotto.includes(numberLotto)==false){
        lotto.push(numberLotto)
}else{
    i-=1
}
}
// console.log(lotto)
//     let lottoes = new Set();
// for(let i = 0; i < 7; i++) {
//   lottoes[i] = Math.floor(Math.random() * 45 + 1);
// }
// console.log(Object.values(lottoes));