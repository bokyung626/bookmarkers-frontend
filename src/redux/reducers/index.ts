import { combineReducers } from "redux";
import userReducer, { UserState } from "./user";

export interface RootState {
  user: UserState; // userReducer의 상태를 포함하는 인터페이스
}

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
