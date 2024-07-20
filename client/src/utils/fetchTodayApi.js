// import axios from 'axios';
// import { fetchTasksBegin,fetchTasksFailure,fetchTasksSuccess } from '../store/actions/tasksActions';
// import { useDispatch } from 'react-redux';

// const fetchTodaysTask = async () => {

//     try {
//         const result = await axios.get('/api/tasks/today');
//         return result.data;
//     }
//     catch (error) {
//         const errorMessage=error.response && error.response.data ? error.response.data : "Failed to fetch today's tasks"
//         throw new Error(errorMessage);
//     }
// }

// export default fetchTodaysTask;

// using redux

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodaysTask = createAsyncThunk(
    'tasks/fetchTodaysTasks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/tasks/today');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response && error.response.data?error.response.data : "Failed to fetch today's tasks");
    
        }
    }
);
