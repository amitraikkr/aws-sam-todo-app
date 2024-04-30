
// Imports required modules
const todoController = require("./todoController");
const errorHandler = require("./errorHandler");

//Lambda function to add todo  in DynamoDB table
module.exports.addTodo = async (event) => {
  
  let body;
  // Check if event.body is already an object or a string
  if (typeof event.body === 'string') {
    body = JSON.parse(event.body);
  } else {
    body = event.body;  // Using directly if already an object
  }  

  return await todoController.addTodo(body)
  .then((data) => {
      console.log("RESPONSE :", data);
      return errorHandler.handleSuccess(data, "Todo list added");
  })
  .catch(err => {
      return errorHandler.handleError(err);
  })  
}

//Lambda function to get todo from DynamoDB table
module.exports.getTodos = async (event) => {
  let body = JSON.parse(event.body);
  return await todoController.getTodos(body)
  .then((data) => {
    console.log("RESPONSE : ", data);
    return errorHandler.handleSuccess(data, "All todo task")
  })
  .catch(err => {
    return errorHandler.handleError(err);
  })
}

//Lambda function to get todo by Id from DynamoDB table
module.exports.getTodoById = async (event) => {
  let body = JSON.parse(event.body);
  console.log("ID ", event.pathParameters);
  let id = event.pathParameters.id;
  return await todoController.getTodoById(id)
  .then(data => {
    return errorHandler.handleSuccess(data, "Todo list by id");
  })
  .catch(err => {
    return errorHandler.handleError(err);
  })
}

//Lambda function to update todo in DynamoDB table
module.exports.updatetodo = async (event) => {
  let body = JSON.parse(event.body);
  return await todoController.updateTodo(body)
  .then(data => {
    return errorHandler.handleSuccess(data, "updated todo list");
  })
  .catch(err => {
    return errorHandler.handleError(err);
  })
}

//Lambda function to delete todo from DynamoDB table
module.exports.deletetodo = async (event) => {
  let id = event.pathParameters.id;
  return await todoController.deleteTodo(id)
  .then(data => {
    return errorHandler.handleSuccess(data, " Todo deleted successfully");
  })
  .catch(err => {
    return errorHandler.handleError(err);
  })
}