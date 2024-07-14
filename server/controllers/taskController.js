import Task from "../models/Task.js";

// TOD:Error handling is very basic
// TODO: No validation done on the input data for create and update task
export const getAllTasks = async (req, res) => { 
    try { 
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
     }
}

export const getTask = async (req, res) => { 
    try { 
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
     }
}

export const deleteTask = async (req, res) => { 
    try { 
        const taskID = req.params.id;
        const task = await Task.findByIdAndDelete(taskID);
        if (!task) {
            return res.status(404).json({ message: "Task not deleted" });
        }
        // res.status(200).json({ message: "Succesfully deleted" });
        res.status(204).send();

    }
    catch (error) {
        res.status(500).json({ message: error.message });
     }
}

export const createTask = async (req, res) => { 
    try { 
        console.log("in server api");
        const taskData = req.body;
        const task = await Task.create(taskData);
        res.status(201).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    try { 
        const taskID = req.params.id;
        const result = await Task.findByIdAndUpdate(taskID,req.body, {new: true});
        if (!result) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Successfully updated!" });
    }
    catch(error) {
        res.status(500).json({ message: error.message });
     }
}