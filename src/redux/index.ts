import {combineReducers} from "redux";
import {AuthReducer} from "./auth/AuthReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
});