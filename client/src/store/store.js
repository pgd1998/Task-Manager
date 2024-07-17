import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tasksReducer from './reducers/tasksReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;