
import axios from 'axios';

export const createtask = async (taskData) => {
    try { 
        const response = await axios.post('/api/tasks', taskData, {
            headers: {
                'Content-Type':'application/json',
            },
        });
        return response.data;
    }
    catch (error) { 
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || "Failed to create task");
        } else {
            throw error;
        }
    }
}