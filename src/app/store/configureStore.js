import { createStore } from 'redux';
import testReducer from '../../feature/testArea/testReducer';

export const configureStore = () => {
    const store = createStore(testReducer)

    return store;
}