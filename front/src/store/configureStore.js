import { createStore } from 'redux';
import jewelReducer from '../redux/reducer';

// 스토어 생성
const store = createStore(jewelReducer);

export default store;