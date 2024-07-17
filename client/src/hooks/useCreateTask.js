import { useState } from "react";
import { createTask } from "../utils";
import { useDispatch, useSelector } from 'react-redux';

const useCreateTask = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state)=>state.tasks.createStatus==='loading')
    const error = useSelector((state) => state.tasks.createError);

    const handleCreateTask = async (taskData) => {
        await dispatch(createTask(taskData))
    };
    return { isLoading, error, handleCreateTask };
}

export default useCreateTask;