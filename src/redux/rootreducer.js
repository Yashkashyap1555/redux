import { combineReducers } from "redux";
import reducer from "./counterreducer";

const rootReducer = combineReducers({
   count : reducer 
});
export default rootReducer;
