import { useEffect } from "react";
import {fetchTodaysTask} from "../utils";
import { useDispatch, useSelector } from "react-redux";

const useFetchToday =  () => {
    const isLoading = useSelector((state) => state.tasks.status==='loading');
    const error = useSelector((state) => state.tasks.fetchError);
    const tasks = useSelector((state) => state.tasks.items);
        const createStatus = useSelector((state) => state.tasks.createStatus); // Monitor task creation status
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodaysTask());
    },[dispatch,createStatus])
    return { isLoading, tasks, error };
}

export default useFetchToday;
