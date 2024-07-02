import { LOGIN, LOGOUT } from "../actions";

export interface UserState {
  userData: UserData | null;
}

export interface UserData {
  profileImage: string;
  nickname: string;
}

const initialState = {
  userData: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userData: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export default userReducer;
