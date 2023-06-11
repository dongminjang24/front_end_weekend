import { useAuth } from "contexts/auth.ctx";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = () => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();
  const { pathName } = useLocation();
  // 현재 페이지의 url의 path를 가지고 오는 훅
  useEffect(() => {
    if (!accessToken) {
      navigate("/", {
        state: {
          from: pathName,
          // 이전 페이지의 path를 기억하기 위해서 전송
        },
        /* navigation의 state옵션을 활용하면
        쿼리ㅣ 스트링이나 파람으로 데이터를 보내지 않아도 원하는 데이터를 전송할 수 있다.
        따라서 굳이 사용자에게 노출시키지 않을 데이터라면 state로 보내도 괜찮음
        그러나 대부분의 데이터는 사용자에게 보여주는 것이 좋습니다.
        */
        //
      });
    }
  }, [accessToken, navigate]);
  return accessToken ? <Outlet></Outlet> : <Navigate to={"/"}></Navigate>;
};

export default PrivateRoute;
