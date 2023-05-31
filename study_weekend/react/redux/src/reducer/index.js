import { combineReducers } from "redux";
import todo from "./todo";
import user from "./user";
export const rootReducer = combineReducers({ user, todo });
