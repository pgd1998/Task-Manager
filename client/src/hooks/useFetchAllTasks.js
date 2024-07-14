import React, { useEffect, useState } from "react";
import fetchAllTasks from "../utils/fetchAllApi";

const useFetchAllTasks = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    // Both useEffects do the same thing and are correct.
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchAllTasks();
                setTasks(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // useEffect(()=>{
    //     setIsLoading(true);
    //     fetchAllTasks()
    //         .then(data => {
    //             setTasks(data);
    //             setIsLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error);
    //             setIsLoading(false);
    //         }
            
    //     )
    // }, []);
    
    return {tasks, isLoading, error}
};

export default useFetchAllTasks;