const students ={
    apple:'장동민',
    banana:'지성경님',
    orange:'김예슬',
    melon:'지형님',
    apple:'김성용'

}

const {apple,banana,orange:kys,melon} = students;
// console.log(apple,banana,orange,melon) 실행안됨.
console.log(apple,banana,kys,melon)
console.clear()
const user=[
    '지형님','진섭님','현우님'
]

// const lee = user[0];
// const yoon = user[1];
// const oh = user[2];
const [lee,yoon,oh] = user

const dog ={
    name:'콩이',
    age:5,
    weight:5,
}

// const printDongDesc = (dog)=>{
//     console.log(
//         `우리집 강아지의 이름은 ${dog.name}입니다.
//         그리고 나이는 ${dog.age} 이구요 무게는 ${dog.weight}입니다.`
//     )
// }
// printDongDesc(dog);


const printDongDesc = ({name,age,weight})=>{
    console.log(
        `우리집 강아지의 이름은 ${name}입니다.
        그리고 나이는 ${age} 이구요 무게는 ${weight}입니다.`
    )
}
printDongDesc(dog);