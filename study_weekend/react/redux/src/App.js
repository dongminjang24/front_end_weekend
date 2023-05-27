import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch } from "react-redux";
import reduxConfig from "./store/store";
import { useSelector } from "react-redux";
function App() {
  /* 리덕스에서는 provider가 하나만 있으면 됨. 
  리덕스에서는 콘텍스트와 달리 (하나의 콘텍스트마다 하나의 프로바이더 생성) 
  하나의 프로바이더만 존재 여러분이 생성할 필요가 없음.
  store-->value들의 집합소(저장소)

  2. store를 생성하고나서 , store폴더 안에 store.js생성
  import { createStore } from "redux";

const reduxConfig = () => {
  const store = createStore;
  };

export default reduxConfig;

  3. store를 만들기 위해 데이터를 저장
    const store = reduxConfig();
    <Provider store={store}>
  
  4. 리덕스의 provider는 단일로 존재하기 때문에 rootReducer라고 하는 reducer의 통합저장소 생성
  reducer폴더 생성 -> index.js(rootReducer) -> reducer(user) 생성
import { combineReducers } from "redux";
export const rootReducer = combineReducers({});

5.rootreducer를 createStore안에 두기 store.js에있는
import { createStore } from "redux";
import { rootReducer } from "../../reducer";
const reduxConfig = () => {
  const store = createStore(rootReducer);
  /* 왜 함수형으로 만들었을까?
위처럼 함수형이 아닌 일반변수로 내보내도 상관없지만, 향후 saga라던지 다양한 라이브러리를 사용하려면 단순 변수뿐아니라
redux의 특정함수를 실행 다른 로직 실행을위해 함수형
return store;
};

export default reduxConfig;

6. user.js에 진짜 리듀서를 만듦
const initailState = [
  {
    id: 1,
    name: "김성용",
  },
];
const reducer = (state = initailState, action) => {};

export default reducer;
7. user를 이용하여 index.js 에 넣어줌
export const rootReducer = combineReducers({ user });

8. 생성된 store의 전역 상태 사용방법
 useSelector, useDispatch를 사용
 
9.
*/
  const store = reduxConfig();
  const userLlist = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //rootReducer에 등록된 키값을 이용하여 상태만 선택하여 전역상태를 가져와 사용
  //위 유저리스트는 사용이 불가능, 프로바이더에 감싸져 있기 전에 사용했기 때문에 ,
  // 하위 컴포넌트에 사용해야만 사용가능
  return (
    <Provider store={store}>
      <div className="App"></div>;
    </Provider>
  );
}

export default App;
