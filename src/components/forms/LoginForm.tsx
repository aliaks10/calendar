import React, {ChangeEvent, useState} from 'react';
import {Button, Form, Input, Row} from "antd";
import {RulesHelper} from "../../utils/RulesHelper";
import {IUser} from "../../models/IUser";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const LoginForm = () => {
    const [values, setValues] = useState<IUser>({username: "", password: ""});

    const {login, setError} = useActions();
    const {error, isLoading} = useTypedSelector(state => state.auth);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(error !== "") setError("");
        setValues(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }));
    };

    const submit = () => {
        const {username, password} = values;
        login(username, password);
    };

    return (
        <Form onFinish={submit}>
            <Form.Item
                label="Username"
                name="username"
                rules={[RulesHelper.required("Username field can not be empty")]}
            >
                <Input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[RulesHelper.required("Password field can not be empty")]}
            >
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                />
            </Form.Item>
            {
                error &&
                <div className="error mb-20">
                    {error}
                </div>
            }
            <Row justify="center">
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default LoginForm;