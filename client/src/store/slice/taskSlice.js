import { createTask, fetchTodaysTask, fetchAllTasks } from "../../utils";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: 'idle', //for fetch todays task
        fetchAllStatus:'idle',
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
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const todaysTasks = action.payload.filter(task => {
                    const taskDate = new Date(task.date);
                    taskDate.setHours(0, 0, 0, 0);
                    return taskDate.getTime() === today.getTime();
                }
                );
                state.items = todaysTasks;
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
            })
            // Handling fetchAllTasks
            .addCase(fetchAllTasks.pending, (state) => {
                state.fetchAllStatus = 'loading';
            })
            .addCase(fetchAllTasks.fulfilled, (state, action) => {
                state.fetchAllStatus = 'succeeded';
                state.items.push(action.payload);
            })
            .addCase(fetchAllTasks.rejected, (state, action) => {
                state.fetchAllStatus = 'failed';
                state.fetchError = action.payload;
            });
    }
});

export const { reducer } = tasksSlice;
export default reducer;