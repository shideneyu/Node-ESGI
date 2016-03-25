module.exports = function(server){
    server.use('/categories', require('./categories')(server));
};