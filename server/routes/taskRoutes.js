import express from "express";
const router = express.Router();

import { getAllTasks, getTask, createTask, deleteTask, updateTask,getTasksForToday } from "../controllers/taskController.js";

router.route("/today").get(getTasksForToday);

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

export default router;