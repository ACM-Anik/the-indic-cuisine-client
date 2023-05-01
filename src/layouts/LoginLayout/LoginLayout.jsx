import React from 'react';
import Header from '../../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <h2>Login Layout</h2>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;