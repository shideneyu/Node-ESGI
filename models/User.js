module.exports = function(server){
    
    var UserSchema = server.mongoose.Schema({
       
        username:{
            type: String,
            //require: true
        },
        lastname:{
            type: String,
            //require: true
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:Strin,
            require:true
        },
        eventId:{
            type:Number,
        },
    }
    
    UserSchema.plugin(require('mongoose-timestamp'));
    return server.mongoose.model('User', UserSchema);
}