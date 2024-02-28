import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom'
import Nav from "./Nav/Nav";


const Layout = () => {
    return (
        <>
            <header>
                <Nav/>
            </header>
            <div>
                <Suspense fallback={<h2>Loading...</h2>}>
                    <Outlet />
                </Suspense>
            </div>
            
        </>
    )
}

export default Layout