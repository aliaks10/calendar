import React, {FC, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CalendarPage from "./pages/CalendarPage";
import {Navigate} from "react-router-dom";
import {Layout} from "antd";
import RequireAuth from "./RequireAuth";
import PathConstants from "../constants/PathConstants";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./NavBar";
import {useActions} from "../hooks/useActions";

const AppRouter: FC = () => {
    const {setIsAuth, setUsername} = useActions();

    useEffect(() => {
        if(localStorage.getItem("isAuth")) {
            setIsAuth(true);
            setUsername(localStorage.getItem("username") || "");
        }
    }, []);

    return (
        <>
            <NavBar />
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to={`/${PathConstants.LOGIN}`} replace/>}/>
                    <Route path={`/${PathConstants.LOGIN}`} element={<LoginPage/>}/>
                    <Route path={`/${PathConstants.CALENDAR}`} element={
                        <RequireAuth>
                            <CalendarPage />
                        </RequireAuth>
                    }/>
                    <Route path="/404" element={<NotFoundPage />}/>
                    <Route path="*" element={<Navigate to="/404" replace/>}/>
                </Routes>
            </Layout>
        </>
    );
};

export default AppRouter;