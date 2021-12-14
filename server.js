const { request, response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

app.use(express.json());

// importing todoController
const todoController = require('./controllers/todoController');

app.post('/todo',todoController.addTodo);
app.get('/todo',todoController.getAllTodo);
app.put('/todo',todoController.updateTodoById);
app.delete('/todo',todoController.deleteTodoById);


// listening to request on localhost port 8020
app.listen(8020,() => {
    console.log('Welcome to our world');
    // connecting the database
    mongoose.connect('mongodb+srv://BamCloud:0548448022@cluster0.u3cox.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log('Database is connected');
    })
    .catch(function (error){
        console.log(`Database is not connected ${error}`);
        // console.log('Database is not connected ',error.message);
    });
});
