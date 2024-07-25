import { createTask, fetchTodaysTask, fetchAllTasks,editTask,deleteTask } from "../../utils";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        status: 'idle', //for fetch todays task
        fetchAllStatus:'idle',
        createStatus: 'idle', //for create task
        editStatus: 'idle',
        deleteStatus:'idle',
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
                // const today = new Date();
                // today.setHours(0, 0, 0, 0);
                // const todaysTasks = action.payload.filter(task => {
                //     const taskDate = new Date(task.date);
                //     taskDate.setHours(0, 0, 0, 0);
                //     return taskDate.getTime() === today.getTime();
                // }
                // );
                // state.items = todaysTasks;
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
            })
            // Handling fetchAllTasks
            .addCase(fetchAllTasks.pending, (state) => {
                state.fetchAllStatus = 'loading';
            })
            .addCase(fetchAllTasks.fulfilled, (state, action) => {
                state.fetchAllStatus = 'succeeded';
                state.items=action.payload;
            })
            .addCase(fetchAllTasks.rejected, (state, action) => {
                state.fetchAllStatus = 'failed';
                state.fetchError = action.payload;
            })
            // handling edit task 
            .addCase(editTask.pending, (state) => {
                state.editStatus = 'loading';
            })
            .addCase(editTask.fulfilled, (state, action) => {
                state.editStatus = 'succeeded';
                const index = state.items.findIndex(task => task.id === action.payload.id);
                if (index != -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(editTask.rejected, (state, action) => {
                state.editStatus = 'failed';
                state.error = action.payload;
            })
            // handle delete task
            .addCase(deleteTask.pending, (state) => {
                state.deleteStatus = 'loading';
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.deleteStatus = 'succeded';
                state.items = state.items.filter(task => task.id != action.payload)
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.deleteStatus = 'failed';
                state.error = action.payload;
            });
    }
});

export const { reducer } = tasksSlice;
export default reducer;