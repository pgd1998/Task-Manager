import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteTask = createAsyncThunk(
    'tasks/delete',
    async (taskID, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/api/tasks/${taskID}`)
            return taskID;
        } catch (error) {
            return rejectWithValue(error.response && error.response.data ? error.response.data : "Unable to fetch all the tasks");

        }
    }
);