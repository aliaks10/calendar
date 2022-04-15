import {AuthActionEnum, SetErrorAction, SetIsAuthAction, SetIsLoadingAction, SetUsernameAction} from "./types";
import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";

export const AuthActionCreators = {
    setIsAuth: (isAuth: boolean): SetIsAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload: isAuth}),
    setUsername: (payload: string): SetUsernameAction => ({type: AuthActionEnum.SET_USERNAME, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}) ,
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>("./users.json");
                const user = response.data.find(x =>
                    x.username === username && x.password === password);
                if (user) {
                    dispatch(AuthActionCreators.setUsername(user.username));
                    dispatch(AuthActionCreators.setIsAuth(true));
                    localStorage.setItem("username", user.username);
                    localStorage.setItem("isAuth", "true");
                } else {
                    dispatch(AuthActionCreators.setError("Username or password is incorrect"));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 500)
        } catch (e) {
            dispatch(AuthActionCreators.setError("Login error"));
        }

    },
    logout: () => (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setIsAuth(false));
        dispatch(AuthActionCreators.setUsername(""));
        localStorage.removeItem("isAuth");
        localStorage.removeItem("username");
    }
};