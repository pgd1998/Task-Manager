import axios from 'axios';
import { fetchTasksBegin,fetchTasksFailure,fetchTasksSuccess } from '../store/actions/tasksActions';
import { useDispatch } from 'react-redux';
// const fetchTodaysTask = async (dispatch) => {

//     dispatch(fetchTasksBegin());
//     try {
//         const result = await axios.get('/api/tasks/today');
//         dispatch(fetchTasksSuccess(result.data));
//     }
//     catch (error) {
//         const errorMessage=error.response && error.response.data ? error.response.data : "Failed to fetch today's tasks"
//         dispatch(fetchTasksFailure(errorMessage));
//     }
// }
const fetchTodaysTask = async () => {

    try {
        const result = await axios.get('/api/tasks/today');
        return result.data;
    }
    catch (error) {
        const errorMessage=error.response && error.response.data ? error.response.data : "Failed to fetch today's tasks"
        throw new Error(errorMessage);
    }
}

export default fetchTodaysTask;