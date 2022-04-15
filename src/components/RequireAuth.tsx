import React from 'react';
import {Navigate} from "react-router-dom";
import PathConstants from "../constants/PathConstants";
import {useTypedSelector} from "../hooks/useTypedSelector";

const RequireAuth = ({children} : {children: JSX.Element}) => {
    const {isAuth} = useTypedSelector(state => state.auth);

    if(!isAuth) {
        return <Navigate to={`/${PathConstants.LOGIN}`} replace />
    }

    return children;
};

export default RequireAuth;