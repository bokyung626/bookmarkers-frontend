import { UserData } from "../reducers/user";

// actions.js
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (userData: UserData) => ({
  type: LOGIN,
  payload: userData,
});

export const logout = () => ({
  type: LOGOUT,
});
