import axios from "axios";

const fetchAllTasks = async () => {
    try {
        const response = await axios.get('/api/tasks');
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data || "Unable to get the tasks")
        } else {
            throw error
        }
    }
}

export default fetchAllTasks;