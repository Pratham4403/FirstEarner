const {Schema} = require('mongoose');

const UsersSchema = new Schema({
    fullname : {
        type : String,
        required : true
    },
    username:{
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    phonenumber : {
        type : String,
        required : true,
        unique : true
    }
});

module.exports = {UsersSchema};