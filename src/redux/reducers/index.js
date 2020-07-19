import { combineReducers } from "redux";
import {reducer as userReducer, MODULE_NAME as userModuleName} from "./userReducer";
import {reducer as categoryReducer, MODULE_NAME as categoryModuleName} from "./categoryReducer";

const rootReducers = combineReducers({
  [userModuleName]: userReducer,
  [categoryModuleName]: categoryReducer,

});

export default rootReducers;
