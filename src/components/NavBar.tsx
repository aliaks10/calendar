import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {Link} from "react-router-dom";
import PathConstants from "../constants/PathConstants";

const NavBar: FC = () => {
    const isAuth = false;

    return (
        <Layout.Header>
            <Row justify="end">
                <Menu className="menu" theme="dark" mode="horizontal" selectable={false}>
                    {
                        isAuth ?
                            <>
                                <Menu.Item key={1}>
                                    <Link to={PathConstants.CALENDAR}>Calendar</Link>
                                </Menu.Item>
                                < Menu.Item key={2}>
                                    < div> Sign out</div>
                                </Menu.Item>
                            </>
                            :
                            <Menu.Item key={3}>
                                <Link to={PathConstants.LOGIN}>Login</Link>
                            </Menu.Item>
                    }
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default NavBar;