var mongoose = require('mongoose');

module.exports = function(server) {
    server.mongoose =  mongoose.connect('mongodb://localhost:27017/Node-ESGI');

    server.models = {
        //Todo: require('./todos')(server)
        User: require('./User')(server),
    };
};