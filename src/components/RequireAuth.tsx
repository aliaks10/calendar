import React from 'react';
import {Navigate} from "react-router-dom";
import PathConstants from "../constants/PathConstants";

const RequireAuth = ({children} : {children: JSX.Element}) => {
    const isAuth = false;

    if(!isAuth) {
        return <Navigate to={`/${PathConstants.LOGIN}`} replace />
    }

    return children;
};

export default RequireAuth;