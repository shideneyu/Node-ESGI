module.exports = function(server){
  server.actions = {
    events: require('./events')(server),
    categories: require('./categories')(server)
  }
};
