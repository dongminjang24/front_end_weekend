const fs = require("fs");
//파일을 읽고 쓰기위해 필요한 모듈
fs.readFile("./test1.txt", "utf-8", (err, data) => {
  if (data) {
    console.log(data);
  } else {
  }
  console.log(err);
});

try {
  let text = fs.readFileSync("./test2.txt", "utf-8");
  console.log(text);
} catch (err) {
  console.log(err);
}
