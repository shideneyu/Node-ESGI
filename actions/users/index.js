module.exports = function(server){
  return {
    create: require('./create')(server),
    get: require('./get')(server),
    show: require('./show')(server),
    delete: require('./delete')(server),
    update: require('./update')(server)
  }
};