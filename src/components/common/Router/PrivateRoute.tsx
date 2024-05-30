import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

export const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const isLogin = !!localStorage.getItem("accessToken");

  if (isLogin) {
    return <Outlet />;
  } else {
    window.alert("권한이 없습니다. 로그인 해주세요.");
    return <Navigate to="/login" />;
  }
};
