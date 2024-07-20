import React from "react";
import './TaskCard.css'
const TaskCard = ({task}) => {
    return (
        <div className="task-card">
                    <h2>{task.name}</h2>
                    <label htmlFor="description"> Description </label>
            <p id="description">{task.task_description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
            )
}

export default TaskCard;