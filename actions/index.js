module.exports = function(server){
  server.actions = {
    events: require('./events')(server)
  }
};
