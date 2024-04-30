module.exports = {
    handleError : function(err) {
        console.log(err);
        return {
            statusCode : err.status,
            body : JSON.stringify({
                status : 500, 
                body : err,
                msg :"Internal server error"
            })
        }
    },
    handleSuccess : function(data, msg) {
        return {
            statusCode : 200,
            body : JSON.stringify({
                status : 200, 
                data : data,
                msg : msg
            })
        }
    }
}
