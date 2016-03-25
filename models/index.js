var mongoose = require('mongoose');

module.exports = function(server) {
    server.mongoose =  mongoose.connect(server.settings.db.mongo);

    server.models = {
      Event: require('./Event')(server),
      Category: require('./category')(server)
    };
};  
