const todoModel = require('../model/todoModel');



async function addTodo(request,response){
try {
    const newTodo = await todoModel.create(request.body);
    response.status(200).json(newTodo);
} catch (error) {
    console.log('Something went wrong', error.message);
}
}

 async function getTodoById(request,response){
    try{
        const get1Todo = await todoModel.findById(request.params.todoId);
        response.status(200).json(get1Todo);
    } catch (error) {
        console.log('Something went wrong',error.message);
    }

}
function getAllTodo(request,response){

}

async function updateTodoById(request,response){
    try{
        const update = await todoModel.findByIdAndUpdate(request.params.todoId,request.body);
        response.status(200).json(update);
    } catch (error) {
        console.log('Something went wrong',error.message);
    }

}

function deleteTodoById(request,reponse){

}

module.exports ={
    addTodo,
    getAllTodo,
    updateTodoById,
    deleteTodoById,
    getTodoById
}