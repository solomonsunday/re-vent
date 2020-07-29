import { combineReducers } from 'redux';
import testReducer from '../../feature/testArea/testReducer';
import eventReducer from '../../feature/event/eventReducer';


const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer
})

export default rootReducer;