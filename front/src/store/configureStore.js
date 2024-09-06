import { createStore } from 'redux';
import jewelReducer from '../redux/reducer';

// 스토어 생성
const store = createStore(
    jewelReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;