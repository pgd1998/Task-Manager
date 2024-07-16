import axios from "axios";

const fetchTask = async (taskID) => {
    try { 
        const response = await axios.get(`/api/tasks/${taskID}`);
        return response.data;
    }
    catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data || "failed to find the task");
        } else {
            throw error;
        }
    }
}

export default fetchTask;