// import  { useEffect, useState } from "react";
// import fetchAllTasks from "../utils/fetchAllApi";

// const useFetchAllTasks = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [tasks, setTasks] = useState([]);
//     const [error, setError] = useState(null);

//     // Both useEffects do the same thing and are correct.
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         setIsLoading(true);
//     //         try {
//     //             const data = await fetchAllTasks();
//     //             setTasks(data);
//     //         } catch (error) {
//     //             setError(error);
//     //         } finally {
//     //             setIsLoading(false);
//     //         }
//     //     };

//     //     fetchData();
//     // }, []);

//     // useEffect(()=>{
//     //     setIsLoading(true);
//     //     fetchAllTasks()
//     //         .then(data => {
//     //             setTasks(data);
//     //             setIsLoading(false);
//     //         })
//     //         .catch(error => {
//     //             setError(error);
//     //             setIsLoading(false);
//     //         }
            
//     //     )
//     // }, []);
//     const handleFetchTasks = async () => {
//         setIsLoading(true);
//         try {
//             const data = await fetchAllTasks();
//             setTasks(data);
//         } catch (error) {
//             setError(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };
    
//     return {tasks, isLoading, error,handleFetchTasks}
// };

// export default useFetchAllTasks;


import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchAllTasks } from "../utils";
const useFetchAllTasks = ()=>{
    const isLoading = useSelector((state) => state.tasks.fetchAllStatus === 'loading');
    const error = useSelector((state) => state.tasks.fetchError);
    const tasks = useSelector((state) => state.tasks.items);
    const dispatch = useDispatch();

    // useEffect(() => {
        
    //     handleFetchAll();
    // }, [dispatch]);

    const handleFetchAll = async()=>{
        await dispatch(fetchAllTasks());
    }
    
    return {isLoading,error,handleFetchAll,tasks}
}

export default useFetchAllTasks;