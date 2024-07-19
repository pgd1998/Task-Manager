import React from "react";
import './Sidebar.css'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const handleCreateTask = () => {
        navigate('/create');
    }
    return (
        <div className="sidebar">
            <button className="sidebar-btn" onClick={handleCreateTask}>Add Task</button>
            <button className="sidebar-btn">Todays Tasks</button>
            <button className="sidebar-btn">View All Tasks</button>
        </div>
    )
}

export default Sidebar;