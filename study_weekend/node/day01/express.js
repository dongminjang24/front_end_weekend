const express = require("express");

const app = express();

app.set("port", 3030);
//key,value의 데이터를 저장할 수 있다.
//

app.get("/todo/:id");

app.get("/todo/:id", (req, res) => {
  console.log(req.params.id);
  res.send("hello express!");
});

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번으로 서버 실행 중");
});

//routing
