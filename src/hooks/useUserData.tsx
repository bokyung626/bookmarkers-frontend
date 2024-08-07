import React, { useEffect, useState } from "react";
import { User } from "user";

export const useUserData = () => {
  const [userData, setUserData] = useState<User | null>(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserData(JSON.parse(user).userData);
    } else {
      setUserData(null);
    }
  }, []);

  const isAuthUser = (id: string) => {
    if (userData && userData.id === id) {
      return true;
    } else return false;
  };

  return { userData, setUserData, isAuthUser };
};
