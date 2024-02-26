import React from "react";
import { Link, Outlet } from 'react-router-dom'
import Nav from "./Nav/Nav";


const Layout = () => {
    return (
        <div>
            <header>
                <Nav/>
            </header>
            <Outlet />
        </div>
    )
}

export default Layout