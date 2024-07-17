import { createTask, fetchTodaysTask } from "../../utils";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: 'idle', //for fetch todays task
        createStatus: 'idle', //for create task
        fetchError: null, // Separate error for fetch
        createError: null, // Separate error for create
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            // Handling fetchTodaysTask
            .addCase(fetchTodaysTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodaysTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTodaysTask.rejected, (state, action) => {
                state.status = 'failed';
                state.fetchError = action.payload;
            })
            // Handling createTask
            .addCase(createTask.pending, (state) => {
                state.createStatus = 'loading';
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.createStatus = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(createTask.rejected, (state, action) => {
                state.createStatus = 'failed';
                state.createError = action.payload;
            });
        
    }
});

export const { reducer } = tasksSlice;
export default reducer;