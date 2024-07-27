import './TaskCardModal.css'
import useEditTask from '../../hooks/useEditTask';
import { useState } from 'react';
import { SaveButton } from '../buttons';
const TaskCardModal = ({ task, onClose }) => {
    const { isLoading, error, handleEditTask } = useEditTask();
    const { name, task_description, date, label, status } = task;
    const [isName, setIsName] = useState(task.name);
    const [description, setDescription] = useState(task.task_description);
    const [dueDate, setDueDate] = useState(task.date);
    const [isLabel, setIsLabel] = useState(task.label);
    const [isStatus, setIsStatus] = useState(task.status);

    if (!task) {
        return null;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const taskID= task._id
        const updatedTaskData = {
            name: isName,
            task_description:description,
            date:dueDate,
            label:isLabel,
            status:isStatus,
        }
        handleEditTask({taskID:taskID,updatedTaskData:updatedTaskData})
    }
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <form className='modal-form' onSubmit={handleSubmit}>
                    <input type='text' value={isName} onChange={(e) => setIsName(e.target.value)}   />
                    <textarea type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <div className='button-container'>
                    <label htmlFor="dueDate">Due date</label>
                    <input type="date" id="dueDate" name="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    
                    <label htmlFor="label">Label</label>
                    <select id="label" name="label" value={isLabel} onChange={(e) => setIsLabel(e.target.value)} >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    
                    <label htmlFor="status">Status</label>
                    <select id="status" name="status" value={isStatus} onChange={(e) => setIsStatus(e.target.value)}>
                        <option value="pending">Pending</option>
                        <option value="in progress">In progress</option>
                        <option value="completed">Completed</option>
                    </select>
                
                    <SaveButton type="submit" disabled={isLoading} />
                        <button onClick={onClose}>Close</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default TaskCardModal;