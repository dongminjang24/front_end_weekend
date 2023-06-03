import { todoMock } from "__mock__/datas/todo.data";
import { rest } from "msw";
export const getTodo = rest.get("/api/todo", async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(todoMock));
  // todoMock데이터를 응답해준다.
  // 자바스크립트 코드형태로 200번대 요청이 들어옴.(200번대는 요청이 성공함을 의미)
});

//요청자한테 타이틀과 콘텐츠를 받아서
// 클라이언트에게 리퀘스트를 받고, 리스폰스를 준다.

// client request((title,content))=> response newTodo(ㅌtitle,content)
export const addTodo = rest.post("/api/todo", async (req, res, ctx) => {
  let title;
  let content;
  await req.json().then((data) => {
    title = data.title;
    content = data.content;
  });
  return res(
    ctx.status(200),
    ctx.json({
      id: Math.floor(Math.random() * 100000),
      title,
      content,
      state: false,
    })
  );
});

export const deleteTodo = rest.delete("/api/todo/:id", (req, res, ctx) => {
  const { id } = req.params;
  return res(
    ctx.status(200),
    ctx.json({
      id: id,
    })
  );
});

export const updateTodo = rest.put("/api/todo/:id", async (req, res, ctx) => {
  const { id } = req.params;
  let content;
  let state;
  let title;
  await req.json().then((data) => {
    title = data.title;
    content = data.content;
    state = data.state;
  });
  return res(
    ctx.status(200),
    ctx.json({
      id: id,
      title,
      content,
      state,
    })
  );
});

export const checkTodo = rest.put("/api/todo/:id", async (req, res, ctx) => {
  const { id } = req.params;
  let state;
  let content;
  let title;
  await req.json().then((data) => {
    title = data.title;
    content = data.content;
    state = data.state;
  });
  return res(
    ctx.status(200),
    ctx.json({
      id: id,
      title,
      content,
      state,
    })
  );
});
// api 등록 => msw 생성 -> msw 동작
//파람 형태로 받을 수 있음.dfg
//ctx 는 해당 데이터에 접근하기 위한 핸들러? 컨텍스트
// 특정객체에 접근할 수 있도록 하는 핸들러라고 생각하면 됨.
