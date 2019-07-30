const todos = require('../controllers/todos');

module.exports = function(app) {
    app.get("/tasks", todos.getAll)
    app.post("/task/create", todos.create);
    app.post("/task/add/:id", todos.add);
    app.delete("/todo/delete/:id", todos.deleteTodo);
    app.post("/task/delete/:id", todos.deleteTask);

}