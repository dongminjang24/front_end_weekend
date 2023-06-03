import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";
const initialState = {
  todos: [],
  getTodoState: {
    loading: false, //모두 초기값을 설정을 해줬다.
    done: false,
    err: null,
  },
  addTodoState: {
    loading: false, //모두 초기값을 설정을 해줬다.
    done: false,
    err: null,
  },
  deleteTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  updateTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  checkTodoState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // reducers: {
  //   addTodo(state, action) {
  //     //immer, 불변성을 자동으로 지켜주는 라이브러리
  //     //여기서는 자체 내장이 되어있음.
  //     state.todos.unshift(action.payload);
  //   },
  //   deleteTodo(state, action) {
  //     state.todos = state.todos.filter((v) => v.id !== action.payload);
  //   },
  //   updateTodo(state, action) {
  //     const stateCopy = state.todos.find((v) => v.id === action.payload.id);
  //     stateCopy.content = action.payload.content;

  //     // id: 2,
  //     //   title: "example2",
  //     //   content: "content2",
  //     //   state: false,
  //   },
  //   editTodo(state, action) {
  //     const stateCopy = state.todos.find((v) => v.id === action.payload.id);
  //     stateCopy.state = action.payload.state;

  //     // id: 2,
  //     //   title: "example2",
  //     //   content: "content2",
  //     //   state: false,
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getTodo.pending, (state) => {
      // 로딩중이라고 생각하면 됨
      state.getTodoState.loading = true;
      state.getTodoState.done = false;
      state.getTodoState.err = null;
    });
    builder.addCase(getTodo.fulfilled, (state, action) => {
      //thunk가 return한 값은 action.payload
      state.todos = action.payload;
      state.getTodoState.loading = false;
      state.getTodoState.done = true;
      state.getTodoState.err = null;
    });
    builder.addCase(getTodo.rejected, (state) => {
      state.getTodoState.loading = false;
      state.getTodoState.done = true;
      state.getTodoState.err = "불러오지 못했습니다.";
    });

    builder.addCase(addTodo.pending, (state) => {
      // 로딩중이라고 생각하면 됨
      state.addTodoState.loading = true;
      state.addTodoState.done = false;
      state.addTodoState.err = null;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      //thunk가 return한 값은 action.payload
      state.todos.unshift(action.payload);
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = null;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = action.payload;
    });
    //dispatch를 세번씩 나누지 않아도 자동으로 상태를 업데이트 해준다.
    //addTodo fulfilled

    builder.addCase(deleteTodo.pending, (state) => {
      // 로딩중이라고 생각하면 됨
      state.deleteTodoState.loading = true;
      state.deleteTodoState.done = false;
      state.deleteTodoState.err = null;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      //thunk가 return한 값은 action.payload
      state.todos = state.todos.filter(
        (v) => v.id !== Number(action.payload.id)
      );
      state.deleteTodoState.loading = false;
      state.deleteTodoState.done = true;
      state.deleteTodoState.err = null;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.deleteTodoState.loading = false;
      state.deleteTodoState.done = true;
      state.deleteTodoState.err = action.payload;
    });

    builder.addCase(updateTodo.pending, (state) => {
      // 로딩중이라고 생각하면 됨
      state.updateTodoState.loading = true;
      state.updateTodoState.done = false;
      state.updateTodoState.err = null;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      //thunk가 return한 값은 action.payload\
      console.log(action.payload.content);
      const stateCopy = state.todos.find(
        (v) => v.id === Number(action.payload.id)
      );
      stateCopy.content = action.payload.content;
      state.updateTodoState.loading = false;
      state.updateTodoState.done = true;
      state.updateTodoState.err = null;
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.updateTodoState.loading = false;
      state.updateTodoState.done = true;
      state.updateTodoState.err = action.payload;
    });

    builder.addCase(checkTodo.pending, (state) => {
      // 로딩중이라고 생각하면 됨
      state.checkTodoState.loading = true;
      state.checkTodoState.done = false;
      state.checkTodoState.err = null;
    });
    builder.addCase(checkTodo.fulfilled, (state, action) => {
      //thunk가 return한 값은 action.payload
      const stateCopy = state.todos.find(
        (v) => v.id === Number(action.payload.id)
      );
      stateCopy.state = action.payload.state;
      state.checkTodoState.loading = false;
      state.checkTodoState.done = true;
      state.checkTodoState.err = null;
    });
    builder.addCase(checkTodo.rejected, (state, action) => {
      state.checkTodoState.loading = false;
      state.checkTodoState.done = true;
      state.checkTodoState.err = action.payload;
    });
  },
});

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  // msw로 만든 가상 백엔드와 데이터 통신
  // 데이터 통신 -> client -> request
  // console.log(title, content);
  const res = await axios.get("/api/todo");
  // console.log(res);
  return res.data; //백엔드에서  response한 값은 data키에 담긴다.

  // console.log(res);
  //즉, 메소드 get,post,delete,patch,put,header,options..메소드명은 백엔드인 서버가 정해준다.
  // 조회는 get,
  // rest.post라고 했기때문에 post로 받음.
});

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async ({ title, content }) => {
    // msw로 만든 가상 백엔드와 데이터 통신
    // 데이터 통신 -> client -> request
    // console.log(title, content);
    const res = await axios.post("/api/todo", { title, content });
    // console.log(res);
    return res.data; //백엔드에서  response한 값은 data키에 담긴다.

    // console.log(res);
    //즉, 메소드 get,post,delete,patch,put,header,options..메소드명은 백엔드인 서버가 정해준다.
    // 조회는 get,
    // rest.post라고 했기때문에 post로 받음.
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async ({ id }) => {
    // msw로 만든 가상 백엔드와 데이터 통신
    // 데이터 통신 -> client -> request
    const res = await axios.delete(`/api/todo/${id}`);
    return res.data; //백엔드에서  response한 값은 data키에 담긴다.

    // console.log(res);
    //즉, 메소드 get,post,delete,patch,put,header,options..메소드명은 백엔드인 서버가 정해준다.
    // 조회는 get,
    // rest.post라고 했기때문에 post로 받음.
  }
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, title, content, state }) => {
    const res = await axios.put(`/api/todo/${id}`, {
      title,
      content,
      state,
    });

    return res.data;
  }
);

export const checkTodo = createAsyncThunk(
  "todo/checkTodo",
  async ({ id, title, content, state }) => {
    const res = await axios.put(`/api/todo/${id}`, {
      title,
      content,
      state,
    });
    return res.data;
  }
);

// export const { addTodo, deleteTodo, updateTodo, editTodo } = todoSlice.actions;
//액션 자동생성 createAction 함수를 만들지 않아도 dispatch의 action명을 함수로 사용하여 매개변수에
// 액션 객체를 받을 수 있다.
//
/* export const createAction = ()=>{
    return (payload)=>{
        return {type,payload}
    }
} */
// ex) dispatch(addTodo(newTodo))
/* 
import { combineReducers } from "redux";
import { todoSlice } from "./todo";
export const rootReducer = combineReducers({ todo: todoSlice.reducer });
이렇게 넣어준다.
*/
