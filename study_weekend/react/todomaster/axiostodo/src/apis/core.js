import axios from "axios";
import TokenRepository from "repositories/TokenRepository";
import AuthApi from "./auth.api";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${TokenRepository.getToken()}`,
  },
  withCredentials: true,
});

//인증 만료된 사용자가 요청보내면 에러 403,401,

// access토큰에 대해서 보내는 것 프론트엔드가 백엔드에 요청을 보내기전에 가로채서 보내는 것.
axiosInstance.interceptors.request.use((config) => {
  const access_token = TokenRepository.getToken();
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

// 프론트엔드가 응답을 받기전에 응답을 가로채는것. 주로 리프레쉬 토큰
axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  }, //성공했을때 가로챘을때 로직이 있다면 구현
  async (err) => {
    if (err.response.status === 401) {
      await AuthApi.logout(); // 레디스나 세션에 대해서 로그인 관리를 하고 있을 수 있기때문에 로그아웃 콜을 보내야하는 의미가 있음
      // 로그아웃 기록
      TokenRepository.removeToken();
    }
    const originalRequest = err.config;
    if (err.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const res = await axiosInstance.post("/user/jwt");
      //토큰 재발급 요청
      if (res.status === 200) {
        //성공
        const token = res.data.data;
        // 응답데이터 -> 토큰
        TokenRepository.setToken(token);
        // 토큰 웹 스토리지 재설정
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        // 헤어에 토큰 재설정
        return axiosInstance(originalRequest);
        //기존 요청 재전송
      }
    }
  }
);

/* 
1.

*/
