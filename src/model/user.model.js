const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required: true,//username is most required
        unique:true,//two usernames cannot be same
    },

    email:{
        type : String,
        required: true,
        unique:true,
    },

    password:{
        type : String,
        required: true,
       
    },

    role:{
        type: String,
        enum: ['user','artist'],
        default:'user',
    }

})


const userModel = mongoose.model('user',userSchema)

module.exports = userModel;