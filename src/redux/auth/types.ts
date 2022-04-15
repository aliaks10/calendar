export enum AuthActionEnum {
    SET_IS_AUTH = "SET_IS_AUTH",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_USERNAME = "SET_USERNAME",
    SET_ERROR = "SET_ERROR",
}

export interface AuthState {
    isAuth: boolean;
    username: string;
    isLoading: boolean;
    error: string;
}

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_IS_AUTH;
    payload: boolean;
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetUsernameAction {
    type: AuthActionEnum.SET_USERNAME;
    payload: string;
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string;
}

export type AuthAction =
    SetIsAuthAction
    | SetIsLoadingAction
    | SetUsernameAction
    | SetErrorAction