import {combineReducers} from "redux";
import filters from "./filter";
import result from "./result";

export default combineReducers({
    filters,
    result
});