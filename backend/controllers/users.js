const {StatusCodes} = require('http-status-codes');
const Users = require('../models/users');

const login = async(req, res) =>{
    res.send("login");
}

const register = async(req, res) => {
    const {username, email, password, role} = req.body;
    const newUser = await Users.create({username, email, password, role});
    console.log(newUser);
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