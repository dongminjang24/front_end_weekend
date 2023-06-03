import { setupWorker } from "msw";
import * as TodoApi from "./apis/todo.api";

const handler = [...Object.values(TodoApi)]; //todoApi에 벨류들이 담겨서
// t const getTodo = rest.get("/api/todo", async (req, res, ctx) => {
//  return res(ctx.status(200), ctx.json(todoMock));
// todoMock데이터를 응답해준다.
//export한 함수들이 객체형태로 * = TodoApi에 담겨 전달 해당 객체의 키의 벨류인 함수들을 배열로 생성
export const worker = setupWorker(...handler);

// 모킹 워커 생성후 핸들러 등록
