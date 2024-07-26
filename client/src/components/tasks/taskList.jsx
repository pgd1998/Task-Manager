// import React, { useState } from "react";
// import TaskCard from "./taskCard";
// import TaskCardModal from "../modals/TaskCardModal";
// const TaskList = ({ tasks }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedTask, setSelectedTask] = useState(null);

//     const handleCardClick = (task) => {
//         setSelectedTask(task);
//         setIsModalOpen(true);
//     }

//     return (
//         <div>
//             {tasks.map((task => 
//                 <div key={task.id} >
//                     <TaskCard task={task}/>
//                     </div>
//             ))}
//             {/* {isModalOpen && <TaskCardModal task={selectedTask} onClose={()=>setIsModalOpen(false)}/>} */}
//         </div>
//     )
// }

// export default TaskList;

import React, { useState } from "react";
import PropTypes from 'prop-types';
import TaskCard from "./taskCard";
import TaskCardModal from "../modals/TaskCardModal";

const TaskList = ({ tasks = [] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleCardClick = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    }

    // Safeguard to ensure tasks is always an array
    const renderTasks = Array.isArray(tasks) ? tasks : [];

    console.log(renderTasks); // Debugging with the safeguard in place

    return (
        <div>
            {renderTasks.map((task => 
                <div key={task.id} >
                    <TaskCard task={task}/>
                </div>
            ))}
        </div>
    )
}

TaskList.propTypes = {
  tasks: PropTypes.array
}

export default TaskList;