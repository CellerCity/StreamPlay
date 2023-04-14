const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    password :{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50     
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;