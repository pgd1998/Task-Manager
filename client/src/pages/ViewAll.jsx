import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import TaskList from "../components/tasks/taskList";
import useFetchAllTasks from "../hooks/useFetchAllTasks";

const ViewAll = () => {
    const { isLoading, error, tasks } = useFetchAllTasks();
    
    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }
    if (error) {
        return (
            <div>Error:{error.message}</div>
        );
    }
   
    
    return (
        <Layout>
            <div>
                <h1>All the Tasks</h1>
                {tasks.length===0?<h1>No Tasks </h1>:
                    <TaskList tasks={tasks} />}
            </div>
        </Layout>
    );

}

export default ViewAll;