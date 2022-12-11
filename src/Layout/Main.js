import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Shared/Sidebar/Sidebar';

const Main = () => {
    return (
        <div className='flex'>
            <div className='w-2/12 min-h-screen'>
                <Sidebar></Sidebar>
            </div>
            <div className='w-10/12 bg-emerald-500'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;