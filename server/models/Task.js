import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: {type: String, required: true},
    task_description: {type: String, required: true},
    date: {type: Date, required: true},
    label: {type:String, required: true, enum:['low','medium','high']},
    status: {type: String, required: true, enum: ['pending', 'in progress','completed']},
});
const Task = mongoose.model('Task', TaskSchema);
export default Task;