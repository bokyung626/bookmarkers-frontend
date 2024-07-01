import axios, { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";

export const useAxiosWithAuth = (): AxiosInstance => {
  const navigate = useNavigate();

  const axiosWithAuth = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  // 요청 인터셉터
  axiosWithAuth.interceptors.request.use(
    (config) => {
      const data = localStorage.getItem("user");

      if (data) {
        const token = JSON.parse(data);
        config.headers.Authorization = `Bearer ${token.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //응답 인터셉터
  axiosWithAuth.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      //원래 요청
      const originalRequest = error.config;

      // access token 이 없는 경우(로그인 하지 않은 사용자)
      if (error.response.status === 401) {
        window.alert("로그인이 필요합니다.");
        navigate("/login");
        return;
      }

      // access token 만료 시 리프레시 토큰 재발급 요청
      if (error.response.status === 403) {
        try {
          const data = localStorage.getItem("user");

          if (data) {
            const token = JSON.parse(data);

            const res = await axios.post("/auth/refresh", {
              accessToken: token.accessToken,
            });

            const newAccessToken = res.data.accessToken;

            const user = {
              accessToken: newAccessToken,
              userData: token.userData,
            };

            localStorage.setItem("user", JSON.stringify(user));

            // 재발급 받은 액세스 토큰을 사용해 요청을 다시 실행
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosWithAuth(originalRequest);
          }
        } catch (err) {
          console.error("Failed to refresh token", err);
          window.alert("로그인 세션이 만료되었습니다. 다시 로그인 해주세요.");
          navigate("/login");
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosWithAuth;
};
