import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAxiosWithAuth } from "../../../hooks/useAxiosWithAuth";

export const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const axiosInstance = useAxiosWithAuth();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const responese = await axiosInstance.get("/auth/check");
        if (responese) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, [axiosInstance]);

  if (isAuthenticated === null) {
    return <>Loading...</>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
