import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: {type: String, required: true},
    task_description: {type: String, required: true},
    date: {type: Date, required: true},
    label: {type:String, required: false},
    status: {type: String, required: true, enum: ['pending', 'in progress','completed']},
});
const task = mongoose.model('task', TaskSchema);
export default task;