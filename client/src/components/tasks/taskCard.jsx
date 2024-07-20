import React, { useState } from "react";
import './TaskCard.css';
import useEditTask from "../../hooks/useEditTask";

const TaskCard = ({ task }) => {

    const [label, setLabel] = useState(task.label);
    const [status, setStatus] = useState(task.status);
    const { isLoading, error, handleEditTask } = useEditTask();
    const handleLabelChange = (e) => {
        const newLabel = e.target.value;
        setLabel(newLabel);
        handleEditTask({ taskID: task._id, updatedTaskData:{ ...task, label: newLabel }});
    }

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        setStatus(newStatus);
        handleEditTask({ taskID: task._id, updatedTaskData:{ ...task, status: newStatus }});
    }
    return (
        <div className="task-card">
            <h2>{task.name}</h2>
            {/* <label htmlFor="description"> Description </label> */}
            <p id="description">{task.task_description}</p>
            <p>{task.date}</p>
            {/* <p>{task.label}</p>
            <p>{task.status}</p> */}
            <select value={label} onChange={handleLabelChange}>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
            </select>
            <select value={status} onChange={handleStatusChange}>
                <option value='pending'>Pending</option>
                <option value='in progress'>In progress</option>
                <option value='completed'>Completed</option>
            </select>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default TaskCard;