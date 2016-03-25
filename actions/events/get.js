module.exports = function(server){
  return function(req, res, next){
    var Event = server.models.events;
    var query = Event.find();

    query.exec(function(err, data){
      if(err)
        return res.status(500).send(err);
      res.send(data);
    });
  }
};
