import { axiosInstance } from "./core";
const PATH = "/todo";

const TodoApi = {
  getTodo() {
    return axiosInstance.get(PATH);
  },
  addTodo(title, content) {
    return axiosInstance.post(PATH, {
      title,
      content,
    });
  },

  updateTodo(id, content, state) {
    return axiosInstance.put(PATH + `/${id}`, {
      content,
      state,
    });
  },
  deleteTodo(id) {
    return axiosInstance.delete(PATH + `/${id}`);
  },
};
//try catch보다는 trow err를 해놓아야 유저가 에러가 뭔지 볼 수 있음.
export default TodoApi;
