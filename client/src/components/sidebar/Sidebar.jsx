import React from "react";
import './Sidebar.css'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleButtonClick = (action) => {
        if (action === "create") {
            navigate('/create');
        }
        else if (action === "today") {
            navigate('/todays-task');
        }
        else if (action === "view_all") {
            navigate("/view-all")
        }
    }

    return (
        <div className="sidebar">
            <button className="sidebar-btn" onClick={()=>handleButtonClick("create")}>Add Task</button>
            <button className="sidebar-btn" onClick={()=>handleButtonClick("today")}>Todays Tasks</button>
            <button className="sidebar-btn" onClick={()=>handleButtonClick("view_all")}>View All Tasks</button>
        </div>
    )
}

export default Sidebar;