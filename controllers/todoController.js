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
async function getAllTodo(request,response){
        try{
            const getAll = await todoModel.find();
            response.status(200).json(getAll);
        } catch (error) {
            console.log('Syntax error',error.message);
        }  

}

async function updateTodoById(request,response){
    try{
        const update = await todoModel.findByIdAndUpdate(request.params.todoId,request.body);
        response.status(200).json(update);
    } catch (error) {
        console.log('Something went wrong',error.message);
    }

}

async function deleteTodoById(request,reponse){
    try{
         await todoModel.findByIdAndDelete(request.params.todoId);
        reponse.status(200).json({message: 'todo deleted'});
    } catch (error) {
        console.log('Syntax error',error.message);
    }

}

module.exports ={
    addTodo,
    getAllTodo,
    updateTodoById,
    deleteTodoById,
    getTodoById
}