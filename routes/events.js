var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(server){
  router.get('/',
    server.actions.events.get);

  router.get('/:id',
    server.actions.events.show);

  router.post('/new',
    bodyparser,
    server.actions.events.create);

  router.put('/:id',
    bodyparser,
    server.actions.events.update);

  router.delete('/:id',
    server.actions.events.remove);

  return router;
};
