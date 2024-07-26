// import axios from "axios";

// const fetchAllTasks = async () => {
//     try {
//         const response = await axios.get('/api/tasks');
//         return response.data;
//     } catch (error) {
//         if (error.response && error.response.data) {
//             throw new Error(error.response.data || "Unable to get the tasks")
//         } else {
//             throw error
//         }
//     }
// }

// export default fetchAllTasks;

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "./config";

export const fetchAllTasks = createAsyncThunk(
    'tasks/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${config.apiBaseUrl}/tasks`);
            return response.data;
        }
        catch (error) {
            return rejectWithValue(error.response && error.response.data ? error.response.data : "Unable to fetch all the tasks");
        }
    }

);
