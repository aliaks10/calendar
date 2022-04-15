import React, {ChangeEvent, useState} from 'react';
import {Button, Form, Input, Row} from "antd";

const LoginForm = () => {
    const [values, setValues] = useState({username: "", password: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }));
    };

    return (
        <Form>
            <Form.Item
                label="Username"
                name="username"
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
            >
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                />
            </Form.Item>
            <Row justify="center">
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Login
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default LoginForm;