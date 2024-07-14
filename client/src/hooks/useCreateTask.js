import { useState } from "react";
import { createtask } from "../utils/api";

const useCreateTask = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCreateTask = async (taskData) => {
        setIsLoading(true);
        try {
            const createdTask = await createtask(taskData);
            setIsLoading(false);
            return createdTask;
        } catch (error) {
            setError(error);
            console.log("in custom hook");
            setIsLoading(false);
            return null;
        }
    };
    return { isLoading, error, handleCreateTask };
}

export default useCreateTask;