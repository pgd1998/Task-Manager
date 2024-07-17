import useFetchTodaysTasks from "../hooks/useFetchToday";

 const TodaysTasksComponent = () => {
    const { isLoading, error, tasks} = useFetchTodaysTasks();
    if (isLoading) return (<div>Loading...</div>)
    if (error) return (<div>Error: {error.message}</div>)
    
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