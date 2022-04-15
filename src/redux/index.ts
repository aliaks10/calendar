import {combineReducers} from "redux";
import {AuthReducer} from "./auth/AuthReducer";
import {EventReducer} from "./event/EventReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
    events: EventReducer
});