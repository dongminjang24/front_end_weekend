// npm init으로 패키지.json생성
const http = require("http");
/* 

모듈간의 의존성을 위해서 생성
모듈을 읽고(가져오기) 쓸 수(내보내기) 있는 기능담당

import, export (es modules)
require, module.exports (Common JS)

ES6 이후에 등장
- ES6(2015) 이후에 등장
- 속도측면에서나 브라우저 환경에서 압도적으로 뛰어남.

CommonJS 

- 현재 거의 모든 환경에서 적용이 가능
- 하위 호환을 위해 nodeJs에서는 기본적으로 CommonJS를 사용


*/

const server = http.createServer((request, response) => {
  response.end("hello");
});

server.listen(3030, () => {
  console.log("3030번 포트로 서버 실행중");
}); // => 서버를 열기
