//import dependancies 
const uuid = require("uuid");
const db   = require("./db");

module.exports = {

    //add todo
    addTodo : function(body) {
        
        return new Promise((resolve, reject) => {
            const data = {
                TableName : process.env.DYNAMODB_TABLE,
                Item : {
                    id : uuid.v1(),
                    title : body.title,
                    date : body.date
                }
            }
            db.put(data, err => {
                console.log(err);
                if(err !== null)
                {
                    reject(err);
                }
                else
                {
                    resolve(data.Item);
                }
            })
        })
    },

    //get all todos
    getTodos : function(body) {
        return new Promise((resolve, reject) => {
            let options = {
                TableName : process.env.DYNAMODB_TABLE
            }

            db.scan(options, (err, result) => {
                console.log("RESULTS :", result);
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve(result);
                }
            })
        })
    },

    //get todo by id
    getTodoById : function(id) {
        return new Promise((resolve, reject) => {
            let options = {
                TableName : process.env.DYNAMODB_TABLE,
                Key : {
                    id : id
                }
            }
            db.get(options, (err, result) => {
               if(err)
               {
                   console.log(err);
                   reject(err);
               } 
               else
               {
                   console.log("RESULT", result);
                   resolve(result);
               }
            })
        })
    },

    //Update todo 
    updateTodo : function(body) {
        return new Promise((resolve, reject) => {
            let options = {
                TableName : process.env.DYNAMODB_TABLE,
                Item : {
                    ...body
                }
            }

            db.put(options, (err) => {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve(body);
                }
            })
        })
    },

    //Delete todo
    deleteTodo : function(id){
        return new Promise((resolve, reject) => {
            let options = {
                TableName : process.env.DYNAMODB_TABLE,
                Key : {
                    id : id
                }
            }
            db.delete(options, (err) => {
                if(err)
                {
                    console.log(err);
                    reject(err);
                }
                else
                {
                    resolve(null)
                }
            })
        })
    }
}