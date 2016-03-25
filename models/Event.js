//models/events.js

module.exports = function(server){
  var EventSchema = server.mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    duedate: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    participants_count: {
      type: Number,
      required: true
    }
    category_id: {
      type: Number,
      required: true
    }
  });

  EventSchema.plugin(require('mongoose-timestamp'));

  return server.mongoose.model('Event', EventSchema);
};

