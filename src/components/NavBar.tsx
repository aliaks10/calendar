import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {Link} from "react-router-dom";
import PathConstants from "../constants/PathConstants";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const NavBar: FC = () => {
    const {isAuth, username} = useTypedSelector(state => state.auth);
    const {logout} = useActions();

    const signOut = () => {
        logout();
    };

    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth ?
                        <>
                            <div className="header-username">{username}</div>
                            <Menu className="menu" theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item key={1}>
                                    <Link to={PathConstants.CALENDAR}>Calendar</Link>
                                </Menu.Item>
                                <Menu.Item key={2}>
                                    <div onClick={signOut}>Sign out</div>
                                </Menu.Item>
                            </Menu>
                        </>
                        :
                        <Menu className="menu" theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key={3}>
                                <Link to={PathConstants.LOGIN}>Login</Link>
                            </Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default NavBar;