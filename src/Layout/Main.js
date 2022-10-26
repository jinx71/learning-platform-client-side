import React from 'react';
import { Outlet } from 'react-router-dom';
import Background from '../Component/Root/Background';
import Navigation from '../Component/Shared/Navigation/Navigation';

const Main = () => {
    return (
        <>
            <Background>
                <Navigation></Navigation>
                <Outlet></Outlet>
            </Background>
        </>
    );
};

export default Main;