import authReducer from "./authReducer";

import {combineReducers} from "redux"
import userreducer from "./userReducer";
import carreducer from "./carReducer";
import categoryreducer from "./categoryReducer";


const reducers=combineReducers({
    auth:authReducer,
    user:userreducer,
    car:carreducer,
    category:categoryreducer,
})


export default reducers;