import { axiosInstance } from "./core";

const PATH = "/user";

const AuthApi = {
  login(email, password) {
    return axiosInstance.post(PATH + "/login", { email, password });
  },

  signUp(email, password) {
    return axiosInstance.post(PATH + "/sign", { email, password });
  },

  logout() {
    return axiosInstance.post(PATH + "/logout");
  },
};
export default AuthApi;
