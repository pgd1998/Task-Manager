import React from "react";
import './TaskCard.css'
const TaskCard = ({task}) => {
    return (
        <div className="task-card">
                    <h2>{task.name}</h2>
                    -
                    <p>{task.task_description}</p>
        </div>
            )
}

export default TaskCard;