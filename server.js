const { request, response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
// importing todoController
const todoController = require('./controllers/todoController');

app.get('/', (request,response)=> {
    response.send('Hello thi is a get method');
})


app.listen(3000,() => {
    console.log('My server is up and running on port 3000');
});

app.post('/',(request,response)=>{
    response.send('Hi I am Techno');
});

app.put('/',(request,response)=>{
    response.send('Hi I am Prime');
});

app.listen(4500,() => {
    console.log('My server is up and running on port 3000');
});

app.get('/todos',(request,response)=>{
    response.send([{
        'title': 'Plan trip to Brazil',
        'description': 'I will go with my friends and families',
        'time':'Tomorrow',
        'isCompleted': false
    }]);
});
app.listen(5500,() => {
    console.log('Happy Day for me');
});

app.get('/bam',(request,response)=>{
    response.send([{
        'username': 'Ing. Bethel',
        'password': 'Blackthunda480',
        'isCompleted': false
    }]);
});
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
