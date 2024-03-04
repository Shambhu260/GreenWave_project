const mongoose = require("mongoose");

const studentSchem = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number},
    address: {type: String},
    cratedAt: {type: Date, required: true, default: Date.now()},
    cratedBy: {type: String},
    updatedAt: {type: Date, required: true, default: Date.now()},
    updatedBy: {type: String}
})
module.exports = mongoose.model("student", studentSchem, "student")


// const mongoose = require("mongoose")
// const taskSchema = new mongoose.Schema({
//     taskTitle: {type: String, required: true},
//     description: {type: String},
//     status: {type: String, default: "notCompleted"},
//     dueDate: {type: Date},
//     createdBy: {type: String},
//     createdAt: { type: Date, required: true, default: Date.now()},
//     updateBy: {type: String},
//     updateAt: {type: Date, required: true, default: Date.now()},
// })
// module.exports = mongoose.model("task", taskSchema, "task")