const {StatusCodes} = require('http-status-codes');
const Users = require('../models/users');

const login = async(req, res) =>{
    const {username, password} = req.body;
    const user = await Users.findOne({username});
    if(!user) return res.status(StatusCodes.NOT_FOUND).send({message: 'User not found'});
    const isPasswordConfirm = await user.comparePassword(password);
    if(!isPasswordConfirm) return res.status(StatusCodes.UNAUTHORIZED).send({message: 'Invalid password supplied'});
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
    res.send("logout");
}

const updateUser = async(req, res) => {
    res.send("update User");
}

const deleteUser = async(req, res) => {
    res.send("Delete User");
}

module.exports = {login, register, logout, updateUser, deleteUser}