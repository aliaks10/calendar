import React from 'react';
import {Layout, Row} from "antd";

const NotFoundPage = () => {
    return (
        <Layout.Content>
            <Row justify="center">
                <h1 className="mt-30">404 Page Not Found</h1>
            </Row>
        </Layout.Content>
    );
};

export default NotFoundPage;