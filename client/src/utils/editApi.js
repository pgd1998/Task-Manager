import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const editTask = createAsyncThunk(
    'tasks/edit',
    async ({taskID,updatedTaskData}, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`/api/tasks/${taskID}`, updatedTaskData, {
                headers: {
                    'Content-Type':'application/json',
                },
            })
            console.log("updated response", response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response && error.response.data ? error.response.data : "Unable to fetch all the tasks");

        }
  }  
);