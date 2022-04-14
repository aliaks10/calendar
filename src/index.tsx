import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import './App.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
);

