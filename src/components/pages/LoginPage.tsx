import React, {FC} from 'react';
import {Card, Row} from "antd";
import {Navigate} from "react-router-dom";
import PathConstants from "../../constants/PathConstants";
import LoginForm from "../forms/LoginForm";

const LoginPage: FC = () => {
    const isAuth = false;

    if(isAuth) {
        return <Navigate to={`/${PathConstants.CALENDAR}`} replace />
    }

    return (
        <Row justify="center" align="middle">
            <Card className="card" title="Login" bordered={false}>
                <LoginForm />
            </Card>
        </Row>
    );
};

export default LoginPage;