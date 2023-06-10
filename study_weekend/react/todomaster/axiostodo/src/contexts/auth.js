import { createContext, useContext, useReducer } from "react";
import AuthApi from "apis/auth.api";
import TokenRepository from "repositories/TokenRepository";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const onPressSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await AuthApi.login(email, password);
      TokenRepository.setToken(res.data.data.token);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserContext.Provider value={{ onPressSignIn }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserStore = () => useContext(UserContext);

export default UserProvider;
