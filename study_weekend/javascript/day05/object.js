let dongmin = {
  name: '장동민',
  age: 27,
  height: '180',
  hobby: '축구'
};

let video = {
  title: 'football is diving',
  content: 'how to play football well',
  User: dongmin
};

console.log(video.title);
console.log(video.content);
console.log(video['User']);

video.User = {
  name: '예슬님'
};

console.log(video.User);

const dongmin_2 = {
  name: '장동민',
  age: 27,
  height: '180',
  hobby: '축구'
};

let video_2 = {
  title: 'football is diving',
  content: 'how to play football well',
  User: dongmin_2
};

console.log(video_2.title);
console.log(video_2.content);
console.log(video_2['User']);

video_2.User = {
  name: '예슬님'
};

console.log(video.User);

let kong = new Object();

kong.name = '콩이';
console.log(kong);

kong.name = '멍멍이';
console.log(kong);

const newObj = Object.assign(dongmin, kong);
console.log(newObj);

const PrintService = {
  on() {
    console.log('샐행되었습니다.');
  },
  off: function () {
    console.log('종료되었습니다.');
  },
  ready: () => {
    console.log('준비되었습니다.');
  }
};

PrintService.on();
PrintService.off();
PrintService.ready();

// 비슷한 속성의 함수들을 하나의 객체로 묶어서
// 한번에 관리하기 위함

// const TokenService ={
// create(){}
// }
