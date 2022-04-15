import {AuthAction, AuthActionEnum, AuthState} from "./types";

const initialState: AuthState = {
    isAuth: false,
    username: "",
    isLoading: false,
    error: ""
};

export const AuthReducer = (state = initialState, {type, payload}: AuthAction): AuthState => {
    switch (type) {
        case AuthActionEnum.SET_IS_AUTH:
            return {...state, isAuth: payload, isLoading: false};
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: payload};
        case AuthActionEnum.SET_USERNAME:
            return {...state, username: payload};
        case AuthActionEnum.SET_ERROR:
            return {...state, error: payload, isLoading: false};
        default:
            return state;
    }
};