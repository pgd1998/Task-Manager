// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import fetchTodaysTask from '../utils/fetchTodayApi';
// import { fetchTasksBegin, fetchTasksSuccess, fetchTasksFailure } from '../store/actions/tasksActions';

        
// const useFetchTodaysTasks = () => { 
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchTodaysTask(dispatch));
//     }, [dispatch]);
// };

// export default useFetchTodaysTasks;

import { useEffect, useState } from "react";
import fetchTodaysTask from "../utils/fetchTodayApi";

const useFetchToday =  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTask] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleFetchToday = async () => {
            setIsLoading(true);
            try {
                const response = await fetchTodaysTask();
                setTask(response);
            } catch (error) {
                setError(error);
            } finally {
                isLoading(false);
            }
        };
        handleFetchToday();
    },[])
    
    return { isLoading, tasks, error };
}

export default useFetchToday;
