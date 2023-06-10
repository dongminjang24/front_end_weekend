import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import TodoPage from "../pages/todo";
import Layout from "../components/Layout";

// export const router = createBrowserRouter([])
const router = createBrowserRouter([
  {
    //인증 토큰이 없다면, 요청이 아예 거절이 됨.
    //
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/todo/:todoId",
        element: <TodoPage />,
      },
    ],
  },
]);

/* 기본값 */
export default router;
