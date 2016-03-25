module.exports = function(server){
    server.controllers = {
        //todos: require('./todos')(server)
        users: require('./users')(server),
    }
};