import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./index";
import thunk from "redux-thunk";

const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;