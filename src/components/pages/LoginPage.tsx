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
                <p>You can log in using following credentials:</p>
                <ul>
                    <li>alex - 12345</li>
                    <li>john - 23456</li>
                    <li>kate - 34567</li>
                    <li>michael - 45678</li>
                    <li>lisa - 56789</li>
                </ul>
            </Card>
        </Row>
    );
};

export default LoginPage;