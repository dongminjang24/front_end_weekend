const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const user = require("./routes/user");
//현재 실행되는 서버의 위치

//morgan은 로깅 미들웨어
// 사용자의 요청,요청사항, status code를 따로 로깅하지 않아도 자동으로 로그
// dev,combined,common,short,tiny
app.use(morgan("dev"));

app.use(express.json()); //json데이터를 읽는 것을 허용,없으면 json 데이터 읽지를 못함
// body-parser ,json(x),express 기본 내장
//
app.use(express.urlencoded({ extended: false }));
//url에 있는 정보를 해석할때 express 내부에 있는 모듈을 사용할 건지,
// 외부에 있는 모듈을 사용할 건지 여부
//만약 false라면 추가 라이브러리가 아닌 내장 모듈로만 값을 해석

app.use("/", express.static(path.join(__dirname, "public")));
// 정적파일 제공에 있습니다.
//특정 경로에 있는 파일을 파일명으로 불러올 수 있는 미들웨어
// '/'<= 접근 권한을 줄 라우트
// path.join<-- 접근 할 저장소 위치
app.get("/", (req, res) => {
  res.send("home");
});
app.use("/user", user);
app.listen(9090, () => {
  console.log("9090번 서버 실행 중");
});
