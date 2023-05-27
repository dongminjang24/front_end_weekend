import { createStore } from "redux";
import { rootReducer } from "../../reducer";
const reduxConfig = () => {
  const store = createStore(rootReducer);
  /* 왜 함수형으로 만들었을까?
위처럼 함수형이 아닌 일반변수로 내보내도 상관없지만, 향후 saga라던지 다양한 라이브러리를 사용하려면 단순 변수뿐아니라
redux의 특정함수를 실행 다른 로직 실행을위해 함수형

*/
  return store;
};

export default reduxConfig;
