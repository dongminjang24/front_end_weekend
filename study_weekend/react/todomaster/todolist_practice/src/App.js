import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import SignIn from './pages/main/components/SignIn/SignIn';
import SignUp from './pages/main/components/SignUp/SignUp';
import { ThemeProvider } from "styled-components";
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import router from "./routes/routing";

function App() {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles></GlobalStyles>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>

  );
}

export default App;
