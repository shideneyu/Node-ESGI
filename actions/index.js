module.exports = function(server){
    server.actions = {
        //todos: require('./todos')(server)
        users: require('./users')(server),
    }
};