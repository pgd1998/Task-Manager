import { useEffect } from "react";
import useFetchTodaysTasks from "../hooks/useFetchToday";
import { useSelector, useDispatch } from "react-redux";
import './Home.css';
import TaskList from "../components/tasks/taskList";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
    const { isLoading, error, tasks } = useFetchTodaysTasks();
   

    if (isLoading) return (<div className="isLoading">Loading...</div>)
    if (error) return (<div className="error">Error: {error.message}</div>)
    
    return (
        <div>
            <Sidebar/>
        <div className="display-task-list">
            <h1>Today's Tasks</h1>
            {tasks.length === 0 ?
                <h1>No tasks for today</h1>
                : <TaskList tasks={tasks || []} />}
            
            </div>
            </div>
    );
 }

export default Home;