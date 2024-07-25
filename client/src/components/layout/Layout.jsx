import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
    return (
        <div className="global-container">
            <Sidebar />
            <div className="main-content">
                {children}
            </div>
        </div>
    )
}

export default Layout;