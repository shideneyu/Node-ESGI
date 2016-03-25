module.exports = function(server){
    var CategorySchema = server.mongoose.Schema({
        name: {
            type: String,
            required: true
        }
    });

    CategorySchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('Category', CategorySchema);
};