import React from 'react';
import { Outlet } from 'react-router-dom';
import Background from '../Component/Root/Background';
import Navigation from '../Component/Shared/Navigation/Navigation';

const Main = () => {
    return (
        <>
            <Background>
                <Navigation></Navigation>
                <header className="flex flex-col items-center justify-center p-8">
                    <img className="shadow-lg rounded-full inline-block w-40 h-40 m-8" src={`https://picsum.photos/600?grayscale&random=1`} alt="logo" />
                    <h1 className="font-bold capitalize text-gray-500 dark:text-gray-400 text-center text-lg pt-4">Try-Not-to-Laugh Challenge</h1>
                </header>
                <Outlet></Outlet>
            </Background>
        </>
    );
};

export default Main;