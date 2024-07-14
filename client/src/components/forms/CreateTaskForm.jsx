import React, { useState } from "react";
import { SaveButton } from "../buttons";
import useCreateTask from "../../hooks/useCreateTask";

const CreateTaskForm = () => {
    const { handleCreateTask, isLoading, error } = useCreateTask();
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [label, setLabel] = useState("low");
    const [status, setStatus] = useState("pending");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = {
            name: taskName,
            task_description:description,
            date:dueDate,
            label,
            status,
        };
        const result = await handleCreateTask(taskData);
        console.log(result);
    };
    const handleCancel = () => { 
        console.log("cancel");
        setTaskName("");
        setDescription("");
        setDueDate("");
        setLabel("low");
        setStatus("pending");
        
    }

    return (
        <div className="create-task-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Task name</label>
                <input type="text" id="name" name="name" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
                
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                
                <label htmlFor="dueDate">Due date</label>
                <input type="date" id="dueDate" name="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                
                <label htmlFor="label">Label</label>
                <select id="label" name="label" value={label} onChange={(e) => setLabel(e.target.value)} required>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                
                <label htmlFor="status">Status</label>
                <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="pending">Pending</option>
                    <option value="in progress">In progress</option>
                    <option value="completed">Completed</option>
                   
                </select>
                
                <SaveButton type="submit" disabled={isLoading} />
                {/* <CancelButton type="button" onClick={ handleCancel} /> */}
                <button onClick={handleCancel} type="button" className="cancel">
                    Cancel
                </button>
                {error && <p className="error">{error.message}</p>}
            </form>
        </div>
    );
};

export default CreateTaskForm;