const todoModel = require('../model/todoModel');



async function addTodo(request,response){
try {
    const newTodo = await todoModel.create(request.body);
    response.status(905).json(newTodo);
} catch (error) {
    console.log('Something went wrong', error.message);
}
}

function getAllTodo(request,response){

}

function updateTodoById(request,response){

}

function deleteTodoById(request,reponse){

}

module.exports ={
    addTodo,
    getAllTodo,
    updateTodoById,
    deleteTodoById
}