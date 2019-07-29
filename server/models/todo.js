const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

var TaskSchema = new mongoose.Schema({
    task: {type: String, required: [true, "A task is required"]},
    date: {type: Date, default: ""},
    details: {type: String, default: ""}
},{timestamps:true});

var TodoSchema = new mongoose.Schema({
    title: {type: String, required: [true, "A title is required"], minlength: [3, "Must be a minimun length of 3 characters"]},
    tasks: [TaskSchema]
},{timestamps:true});

mongoose.model('Task', TaskSchema);
mongoose.model('Todo', TodoSchema);
TodoSchema.plugin(uniqueValidator);