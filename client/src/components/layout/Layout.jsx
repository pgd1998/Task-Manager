import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;