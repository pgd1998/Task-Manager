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


import  { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchAllTasks } from "../utils";
const useFetchAllTasks = ()=>{
    const isLoading = useSelector((state) => state.tasks.fetchAllStatus === 'loading');
    const error = useSelector((state) => state.tasks.fetchError);
    const tasks = useSelector((state) => state.tasks.items);
    const createStatus = useSelector((state) => state.tasks.createStatus); 
    const editStatus = useSelector((state) => state.tasks.editStatus);
    const deleteStatus = useSelector((state) => state.tasks.deleteStatus);
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(fetchAllTasks());
    }, [dispatch,createStatus,editStatus,deleteStatus]);

    
    
    return {isLoading,error,tasks}
}

export default useFetchAllTasks;