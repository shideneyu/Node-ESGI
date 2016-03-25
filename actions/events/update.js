module.exports = function(server) {
  return function(req, res, next) {
    var Event = server.models.Event;
    var id = req.params.id;

    Event.findByIdAndUpdate(id, { $set: req.body}, function (err, booth) {
      if (err)
        return res.status(500).send(err);
      res.send(booth);
    });
  }
};
