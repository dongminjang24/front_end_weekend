import TokenRepository from "repositories/TokenRepository";

import { createContext, useState, useEffect, useContext } from "react";
import AuthApi from "apis/auth.api";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  /* 왜 accessToken을 state로 관리할까?
웹 스토리지는 state가 아니므로, 로그인 로그아웃이 새로고침이나 페이지 이동없이
UI변동을 일으키기 때문에 
*/
  useEffect(() => {
    const token = TokenRepository.getToken();
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const login = (token) => {
    TokenRepository.setToken(token);
    setAccessToken(token);
  };

  const logout = async () => {
    const res = await AuthApi.logout();
    if (res.status === 201) {
      TokenRepository.removeToken();
      setAccessToken(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
