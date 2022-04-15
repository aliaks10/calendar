import React, {FC} from 'react';
import {Card, Row} from "antd";
import {Navigate} from "react-router-dom";
import PathConstants from "../../constants/PathConstants";
import LoginForm from "../forms/LoginForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const LoginPage: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth);

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