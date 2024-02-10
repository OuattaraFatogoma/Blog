const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please enter a title"],
        unique: [true, "Username already exists"]
    },
    email: {
        type: String,
        lowercase: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        required: [true, "Please enter an email"],
        unique: [true, "Email already exists"]
    },
    password:{
        type: String,
        required: [true, "Please enter a Password"],
        minLength: [6, "Password must be at least 6 characters"]
    },
    role:{
        type: String,
        enum:{
            values: ["reader", "writer"],
            message: "Role must be reader or writer"
        },
        default: "reader"
    },
});

module.exports = mongoose.model("Users", UserSchema);

