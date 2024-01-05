import authReducer from "./authReducer";

import {combineReducers} from "redux"
import userreducer from "./userReducer";
import carreducer from "./carReducer";

const reducers=combineReducers({
    auth:authReducer,
    user:userreducer,
    car:carreducer,
    
})


export default reducers;