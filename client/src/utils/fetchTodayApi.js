import axios from 'axios';

const fetchTodaysTask = async () => {
    try {
        const result = await axios.get('/api/tasks/today');
        return result.data;
    }
    catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data || "failed to fetch todays tasks");
        } else {
            throw error;
        }
    }
}

export default fetchTodaysTask;