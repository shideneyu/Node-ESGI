module.exports = function(server){
  return function(req, res, next){
    var Event = server.models.Event;
    var booth = new Event(req.body);

    booth.save(function(err, data){
      if(err) {
        return res.status(500).send(err);
      }

      res.json(data);

    });
  }
};
