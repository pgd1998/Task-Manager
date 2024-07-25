import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// const fetchTask = async (taskID) => {
//     try { 
//         const response = await axios.get(`/api/tasks/${taskID}`);
//         return response.data;
//     }
//     catch (error) {
//         if (error.response && error.response.data) {
//             throw new Error(error.response.data || "failed to find the task");
//         } else {
//             throw error;
//         }
//     }
// }

// export default fetchTask;

const fetchTask = createAsyncThunk(
    'tasks/fetchOne',
    async (taskID, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/tasks/${taskID}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response && error.response.data ? error.response.data : "Unable to fetch all the tasks");
        }
    }
);