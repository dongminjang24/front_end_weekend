import AuthApi from "apis/auth.api";
import { axiosInstance } from "apis/core";
import { useAuth } from "contexts/auth.ctx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { accessToken, logout } = useAuth();
  const navigate = useNavigate();
  const onPressRefreshBtn = async () => {
    const res = await axiosInstance.post("/user/jwt");
    console.log(res);
  };

  const onPressLogoutBtn = async () => {
    if (!accessToken) return navigate("/");
    await logout();
    navigate("/");
  };
  return (
    <div>
      HEADER
      <button onClick={onPressRefreshBtn}>리프레쉬</button>
      <button onClick={onPressLogoutBtn}>
        {console.log(accessToken)}
        {accessToken ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
};
export default Header;
