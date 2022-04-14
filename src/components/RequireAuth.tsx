import React from 'react';
import {Navigate} from "react-router-dom";

const RequireAuth = ({children} : {children: JSX.Element}) => {
    const isAuth = false;

    if(!isAuth) {
        return <Navigate to="/login" replace />
    }

    return children;
};

export default RequireAuth;