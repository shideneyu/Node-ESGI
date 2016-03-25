module.exports = function(server){
  server.use('/events', require('./events')(server));1
};