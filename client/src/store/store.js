import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tasksReducer from './reducers/tasksReducer';
import reducer from './slice/taskSlice';

const rootReducer = combineReducers({
    tasks: reducer,
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;