import { useState } from "react";
import fetchTask from "../utils/fetchOneApi";

const useFetchTask =  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [task, setTask] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchOne = async (taskID) => {
        setIsLoading(true);
        try {
            const response = await fetchTask(taskID);
            setTask(response);
        } catch (error) {
            setError(error);
        } finally {
            isLoading(false);
        }
    }
    return { isLoading, task, error, handleFetchOne };
}

export default useFetchTask;