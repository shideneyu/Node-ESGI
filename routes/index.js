module.exports = function(server){
    //server.use('/todos', require('./todos')(server));
    server.use('/users', require('./users')(server));
};