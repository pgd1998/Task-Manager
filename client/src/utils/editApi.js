import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "./config";

export const editTask = createAsyncThunk(
    'tasks/edit',
    async ({taskID,updatedTaskData}, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${config.apiBaseUrl}/tasks/${taskID}`, updatedTaskData, {
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