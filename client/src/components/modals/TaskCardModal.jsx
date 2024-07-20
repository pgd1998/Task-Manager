import './TaskCardModal.css'
const TaskCardModal = ({ task, onClose }) => {
    if (!task) {
        return null;
    }
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>{task.name}</h2>
                <p id="description">{task.task_description}</p>
                <p>{task.date}</p>
                <p>{task.label}</p>
                <p>{task.status}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default TaskCardModal;