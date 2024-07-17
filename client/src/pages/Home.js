import { useEffect } from "react";
import useFetchTodaysTasks from "../hooks/useFetchToday";
import { useSelector, useDispatch } from "react-redux";

const TodaysTasksComponent = () => {
    const dispatch = useDispatch();
    // const { isLoading, error, tasks } = useSelector(state => state.tasks);
    const { isLoading, error, tasks } = useFetchTodaysTasks();
    // Just call the hook; no need to dispatch it
    // useFetchTodaysTasks();
    
    // useEffect(() => {
    //     dispatch(useFetchTodaysTasks());
    // }, [dispatch]);

    // if (isLoading) return (<div>Loading...</div>)
    // if (error) return (<div>Error: {error.message}</div>)
    
    return (
        <div>
            <h1>Today's Tasks</h1>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id}>
                            <strong>{task.name}</strong> - {task.description}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
 }

export default TodaysTasksComponent;