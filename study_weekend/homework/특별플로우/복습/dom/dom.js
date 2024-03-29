const users = [
  {
    id: 1,
    name: '김사과',
    age: 20,
    height: 190,
  },
  {
    id: 2,
    name: '이수박',
    age: 32,
    height: 185,
  },
  {
    id: 3,
    name: '오렌지',
    age: 20,
    height: 180,
  },
  {
    id: 4,
    name: '이멜론',
    age: 28,
    height: 175,
  },
];

const $info = document.querySelector('#info');
$info.innerHTML = `
    <div>${users[0].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>
`;

const nextBtn = document.querySelectorAll('button')[1]
const prevBtn = document.querySelectorAll('button')[0]

console.log(users.length);
let i = 0
nextBtn.addEventListener('click',()=>{
  if (i === (users.length-1)){
      i = 0
  }
  else{ i += 1}
    $info.innerHTML = `
      <div>${users[i].name}</div>
      <div>${users[i].age}</div>
      <div>${users[i].height}</div>
  `
})

prevBtn.addEventListener('click',()=>{
  if (i === 0){
      i = users.length-1
  }
  else{ i -= 1}
    $info.innerHTML = `
      <div>${users[i].name}</div>
      <div>${users[i].age}</div>
      <div>${users[i].height}</div>
  `
})

/* 
유저 목록 순서대로 보여주기
다음 버튼을 누르면 다음 유저가 보여져야합니다. 단, 마지막 유저일 시 다음은 다시 첫번째 유저가 되어야합니다.
이전 버튼을 누르면 이전 유저가 보여져야합니다. 단, 첫번째 유저일 시 이전은 마지막 유저가 되어야합니다.

또한 DOM API와 배열을 다뤄야할 때 인덱스가 필요한 시점이나 상황이 언제일지 고민해보세요 :)
*/
