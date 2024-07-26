import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "./config";
export const deleteTask = createAsyncThunk(
    'tasks/delete',
    async (taskID, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${config.apiBaseUrl}/tasks/${taskID}`)
            return taskID;
        } catch (error) {
            return rejectWithValue(error.response && error.response.data ? error.response.data : "Unable to fetch all the tasks");

        }
    }
);