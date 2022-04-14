import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CalendarPage from "./pages/CalendarPage";
import {Navigate} from "react-router-dom";
import {Layout} from "antd";
import RequireAuth from "./RequireAuth";

const AppRouter: FC = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/calendar" element={
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