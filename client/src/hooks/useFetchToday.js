import { useState, useEffect } from 'react';
import fetchTodaysTask from '../utils/fetchTodayApi';

const useFetchTodaysTasks = () => {
    const [isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTodayTasks = async () => {
            setIsLoading(true);
            try {
                const response = await fetchTodaysTask();
                setTasks(response);

            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }

        }
        fetchTodayTasks();
    }, []);

    return { isLoading, error, tasks };
}

export default useFetchTodaysTasks;