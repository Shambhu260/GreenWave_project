const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    taskTitle: {type: String, required: true},
    description: {type: String},
    status: {type: String, default: "notCompleted"},
    dueDate: {type: Date},
    createdBy: {type: String},
    createdAt: { type: Date, required: true, default: Date.now()},
    updateBy: {type: String},
    updateAt: {type: Date, required: true, default: Date.now()},
})
module.exports = mongoose.model("task", taskSchema, "task")