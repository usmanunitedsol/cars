import reducers from "./reducers";
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from 'redux';

const persistConfig={
    key:"root",
    version:1,
    storage,
};



const persistReduce=persistReducer(persistConfig,reducers)
export const store= createStore(persistReduce,{},applyMiddleware(thunk))