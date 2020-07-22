import { combineReducers } from 'redux';
import testReducer from '../../feature/testArea/testReducer';


const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;