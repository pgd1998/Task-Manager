import React, { useState } from "react";
import './TaskCard.css';
import useEditTask from "../../hooks/useEditTask";
import TaskCardModal from "../modals/TaskCardModal";
import useDeleteTask from "../../hooks/useDeleteTask";

const TaskCard = ({ task }) => {

    const [label, setLabel] = useState(task.label);
    const [status, setStatus] = useState(task.status);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { isLoading:loadingEdit, error:editError, handleEditTask } = useEditTask();

    const { isLoading: loadingDelete, error:deleteError, handleDeleteTask } = useDeleteTask();

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

    const handleModel = ()=>{
        setIsModalOpen(true);
    }

    const handleDelete = () => {
        handleDeleteTask(task._id);
    }


    return (
        <div className="task-card">
            <h2 className="task-name">{task.name}</h2>
            {/* <label htmlFor="description"> Description </label> */}
            <p className="task-description">{task.task_description}</p>
            <p>{task.date}</p>
            {/* <p>{task.label}</p>
            <p>{task.status}</p> */}
            <div className="buttons-container">
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
            
                <button onClick={handleModel}>Edit</button>
                {isModalOpen && <TaskCardModal task={task} onClose={()=>setIsModalOpen(false)}/>}
            <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;