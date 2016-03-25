var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(server){

    router.get('/', server.actions.categories.get);
    /*
    router.post('/',
        bodyparser,
        server.actions.categories.create);

    router.put('/:old/:new', server.controllers.todos.update);

    router.delete('/:todo', server.controllers.todos.remove);
    */

    return router;
};