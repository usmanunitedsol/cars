import authReducer from "./authReducer";

import {combineReducers} from "redux"
import userreducer from "./userReducer";

const reducers=combineReducers({
    auth:authReducer,
    user:userreducer,
    
})


export default reducers;