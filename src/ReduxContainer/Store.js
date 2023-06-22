import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import videoReducer from './Reducer'

const rootReducer = combineReducers({videoReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk))