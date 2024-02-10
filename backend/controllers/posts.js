const {StatusCodes} = require('http-status-codes');

const getAllPosts = async(req, res) =>{
    res.send("All posts");
}

const createPost = async(req, res) =>{
    res.send("post creation");
}

const getPost = async(req, res) =>{
    res.send("Get post");
}

const updatePost = async(req, res) =>{
    res.send("post editing");
}

const deletePost = async(req, res) =>{
    res.send("delete post");
}

module.exports = {getAllPosts, createPost, getPost, updatePost, deletePost}