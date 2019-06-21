import {combineReducers} from 'redux';
import boxReducer from './boxReducer';

const rootReducer =  combineReducers({
    boxes: boxReducer
    
});

export default rootReducer;



