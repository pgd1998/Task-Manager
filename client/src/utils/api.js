
// import axios from 'axios';

// export const createtask = async (taskData) => {
//     try { 
//         const response = await axios.post('/api/tasks', taskData, {
//             headers: {
//                 'Content-Type':'application/json',
//             },
//         });
//         return response.data;
//     }
//     catch (error) { 
//         if (error.response && error.response.data) {
//             throw new Error(error.response.data.message || "Failed to create task");
//         } else {
//             throw error;
//         }
//     }
// }

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "./config";

export const createTask = createAsyncThunk(
    'tasks/createTask',
    async (taskData, { rejectWithValue }) => {
      try {
          const response = await axios.post(`${config.apiBaseUrl}/tasks`, taskData, {
              headers: {
                'Content-Type':'application/json',
            },
          });
          return response.data;
      } catch (error) {
              return rejectWithValue(error.response && error.response.data ? error.response.data.message : "Failed to create task");
      }
  }  
);