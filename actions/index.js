module.exports = function(server){
    server.actions = {
        categories: require('./categories')(server)
    }
};