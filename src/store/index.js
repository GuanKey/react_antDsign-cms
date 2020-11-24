import { createStore, combineReducers,applyMiddleware } from "redux";
import todoReducer from './reducers/todoReducer'
import goodReducer from './reducers/goodReducer'

import thunk from 'redux-thunk'

const reducer = combineReducers({
    todo:todoReducer,
    good:goodReducer
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;
