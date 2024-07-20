import React, { useState } from "react";
import TaskCard from "./taskCard";
import TaskCardModal from "../modals/TaskCardModal";
const TaskList = ({ tasks }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleCardClick = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    }

    return (
        <div>
            {tasks.map((task => 
                <div key={task.id} onClick={()=>handleCardClick(task)}>
                    <TaskCard task={task} /> 
                    </div>
            ))}
            {/* {isModalOpen && <TaskCardModal task={selectedTask} onClose={()=>setIsModalOpen(false)}/>} */}
        </div>
    )
}

export default TaskList;