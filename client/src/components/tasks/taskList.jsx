import React from "react";
import TaskCard from "./taskCard";
const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task => 
                <TaskCard key={ task.id} task={task}/> 
            ))}
        </div>
    )
}

export default TaskList;