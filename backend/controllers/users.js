const {StatusCodes} = require('http-status-codes');
const Users = require('../models/users');

const login = async(req, res) =>{
    const {username, password} = req.body;
    const user = await Users.findOne({username});
    if(!user) return res.status(StatusCodes.NOT_FOUND).send({message: 'User not found'});
    const isPasswordConfirm = await user.comparePassword(password);
    if(!isPasswordConfirm) return res.status(StatusCodes.UNAUTHORIZED).send({message: 'Invalid password'});
    const token = await user.generateToken();
    res.status(StatusCodes.OK).send({username, token})
}

const register = async(req, res) => {
    const {username, email, password, role} = req.body;
    const newUser = await Users.create({username, email, password, role});
    const token = await newUser.generateToken();
    res.status(StatusCodes.CREATED).send({message: "User created", username, token})
}

const logout = async(req, res) => {
    res.status(StatusCodes.OK).send({token: ""})
}

const updateUser = async(req, res) => {
    const {pastUsername, username, email, password, role} = req.body;
    const userId  = req.userId; 
    const user = await Users.findOne({username: pastUsername});
    if(!user) return res.status(StatusCodes.NOT_FOUND).send({message: 'User not found'});
    if(user["_id"] != userId) return res.status(StatusCodes.UNAUTHORIZED).send({message: 'Not authorized'});

    const userEdit = {};
    if(username) userEdit.username = username;
    if(email) userEdit.email = email;
    if(role) userEdit.role = role;
    // TODO: if(password) handle password change
    const userUpdate = await Users.findOneAndUpdate({username: pastUsername}, userEdit, {new: true, runValidators: true}).select(["username","email", "role","-_id"]); 
    res.status(StatusCodes.OK).send({message: "User profile update", userUpdate})
}

const deleteUser = async(req, res) => {
    const {username, password} = req.body;
    const userId  = req.userId; 
    const user = await Users.findOne({username});
    if(!user) return res.status(StatusCodes.NOT_FOUND).send({message: 'User not found'});
    const isPasswordConfirm = await user.comparePassword(password);
    if(user["_id"] != userId || !isPasswordConfirm) return res.status(StatusCodes.UNAUTHORIZED).send({message: 'Not authorized'});

    const userDeleted = await Users.findOneAndDelete({username}).select(["username","email", "role","-_id"]); 
    res.status(StatusCodes.OK).send({message: "User profile deleted", userDeleted})
}

module.exports = {login, register, logout, updateUser, deleteUser}