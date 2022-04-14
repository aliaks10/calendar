import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CalendarPage from "./pages/CalendarPage";
import {Navigate} from "react-router-dom";
import {Layout} from "antd";
import RequireAuth from "./RequireAuth";
import PathConstants from "../constants/PathConstants";

const AppRouter: FC = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to={`/${PathConstants.LOGIN}`} replace/>}/>
                    <Route path={`/${PathConstants.LOGIN}`} element={<LoginPage/>}/>
                    <Route path={`/${PathConstants.CALENDAR}`} element={
                        <RequireAuth>
                            <CalendarPage />
                        </RequireAuth>
                    }/>
                </Routes>
            </Layout>
        </>
    );
};

export default AppRouter;