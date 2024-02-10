const {StatusCodes} = require('http-status-code');

const login = async(req, res) =>{
    res.send("login");
}

const register = async(req, res) => {
    res.send("register");
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