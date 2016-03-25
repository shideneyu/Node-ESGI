module.exports = function(server){
  server.use('/events', require('./events')(server));
  server.use('/categories', require('./categories')(server));
  server.use('/users', require('./users')(server));
};