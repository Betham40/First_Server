const { request, response } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT|| 1200
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

app.use(express.json());

app.get('/',(request,response)=>{
    response.status(200).json({message:'Hi I am available'});
});

// importing todoController
const todoController = require('./controllers/todoController');

app.post('/todo',todoController.addTodo);
app.get('/todo',todoController.getAllTodo);
app.patch('/todo/:todoId',todoController.updateTodoById);
app.delete('/todo/:todoId',todoController.deleteTodoById);
app.get('/todo/:todoId',todoController.getTodoById);


// listening to request on localhost port 8020
app.listen(PORT,() => {
    console.log('Welcome to our world',PORT);
    // connecting the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log('Database is connected');
    })
    .catch(function (error){
        console.log(`Database is not connected ${error}`);
        // console.log('Database is not connected ',error.message);
    });
});
