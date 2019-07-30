const mongoose = require('mongoose'); 
const Todo = mongoose.model('Todo');
const Task = mongoose.model('Task');

// routes come to here
module.exports = {

    getAll: (req, res) => {
        Todo.find({}, (err, data) => {
            if(err) {
                console.log(err);
                res.json({message: "error", error: err});
            }
            else {
                res.json(data)
            }
        })
    },

    create: (req, res) => {
        console.log('In todos');
        console.log('req.body: ', req.body);

        Todo.create(req.body, function(err, todo){ 
            if(err){
                res.json({error: err})
            }
            else {
                Task.create(req.body, function(err, task){
                    if(err){
                        res.json({error: err})
                    }
                    else {
                        console.log("todo id: ", todo._id)
                        Todo.findByIdAndUpdate({_id: todo._id}, {$push: {tasks: task}}, function(err, todo){
                            if(err){
                                res.json({error: err});
                            }
                            else{
                                res.json({todo: todo})
                            }
                        })
                    }
                })
            }
        })
    },

    add: (req, res) => {
        console.log('In todos');
        console.log('id: ', req.params.id);

        var task = new Task({task: req.body.task, date: req.body.date, details: req.body.details});
        Todo.findByIdAndUpdate({_id: req.params.id}, {$push: {tasks: task}}, function(err, data) {
            if(err) {
                console.log("There's an error!", error);
                res.json({message: "error", error: err})
            }
            else {
                console.log(`Data: ${data}`);
                res.json({message: "success", data})
            }
        })
    },

    deleteTodo: (req, res) => {
        console.log('In todos');
        Todo.findByIdAndDelete( (req.params.id), (err, data) => {
            if(err) {
                console.log('Error in deleting');
                res.json({message: "error", error: err});
            }
            else {
                console.log('Data: ', data);
                res.json({message: "success", delete: data});
            }
        });
    },

    deleteTask: function(req,res){
        Todo.findById(req.params.id, function(err, todo) {
            console.log('todo: ', todo)
            var destroy = todo.tasks.pull(req.body.task_id)
            console.log(destroy);
            todo.save(function (err) {
                if(err){
                    console.log("error: ", err)
                }
                else {
                    console.log("success!")
                }
            })
        })
    },

}