const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

UserSchema.method("generateToken", function(){
    const token = jwt.sign({username: this.username, userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});
    return token;
})

UserSchema.method("comparePassword", async function(password){
    const isPasswordConfirm = await bcrypt.compare(password, this.password);
    return isPasswordConfirm
})



module.exports = mongoose.model("Users", UserSchema);

