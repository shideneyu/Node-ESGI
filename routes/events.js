var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(server){
  router.get('/events',
    server.actions.events.get);

  router.get('/events/:id',
    server.actions.events.show);

  router.post('/events/new',
    bodyparser,
    server.actions.events.create);

  router.put('/events/:id',
    bodyparser,
    server.actions.events.update);

  router.delete('/events/:id',
    server.actions.events.remove);

  return router;
};
