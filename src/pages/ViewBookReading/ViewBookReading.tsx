import React, { useEffect } from "react";
import { PageContainer } from "../../assets/styles/style";
import * as Styled from "./style";
import axios from "axios";
import { useCookies } from "react-cookie";

export const ViewBookReading = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  useEffect(() => {
    console.log(cookies.refreshToken);
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    axios.post("/auth/refresh", {
      accessToken: localStorage.getItem("accessToken"),
      refreshToken: cookies.refreshToken,
    });
  }, []);

  return (
    <PageContainer>
      <Styled.ReviewContainer></Styled.ReviewContainer>
    </PageContainer>
  );
};
