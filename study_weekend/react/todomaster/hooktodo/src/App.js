import { RouterProvide,BrowserRouter,Route,Routes,RouterProvider } from 'react-router-dom';
import MainPage from './pages/main/_index';
import TodoPage from './pages/todo/todo';
import './App.css';
import router from './routes/routing';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import GlobalStyles from './styles/global'
function App() {
  //export default를 해주면 key값으로 안찾고 바로 찾을 수 있어서 
  //마음대로 이름 변경간으함
  //하지만 export default를 안하면 key값을 지정해줘야하기 때문에 {}안에 key를 넣어즘
  // const routing = router
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <RouterProvider router={router}/>
    </ThemeProvider>
    // <BrowserRouter>
    // {/* HTML5를 지원하느 브라우저의  URL의 변화를 감지*/}
    //   <Routes>
    //     <Route element={<Layout></Layout>}>
    //       {/** 하위에 있는 Route 컴포넌트 중 url과 path가 일치하는 컴포넌트만 보여주는 역할*/}
    //       <Route path='/' element={<MainPage/>} />
    //       <Route path='/todo/:todoId' element={<TodoPage/>} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    /*
      BrowserRouter(URL감지)->Routes(하위에 route중에 경로에 맞는 컴포넌트 보여주는 역할)
      outlet--> routes에 의해 가지고 와진 컴포넌트를 outlet으로 가지고 올 수 있음. 
      라우트는 라우트스로 감싸줘야
    */ 
  );
}

export default App;
