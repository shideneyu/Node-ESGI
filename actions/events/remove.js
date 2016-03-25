module.exports = function(server) {
  return function(req, res, next) {
    var booth = server.models.event;
    booth.remove({name: req.params.name}, function(err, data){
      if (err)
        return res.status(500).send(err);

      res.send(data);
    })
  }
};
