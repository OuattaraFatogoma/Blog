const {StatusCodes} = require('http-status-codes');
const fs = require('fs');
const Posts = require('../models/posts');

const getAllPosts = async(req, res) =>{
    const posts = await Posts.find().sort("-createdAt").populate("author", ["username", "-_id"]);
    res.status(StatusCodes.OK).json(posts);
}

const createPost = async(req, res) =>{
    const image = req.file;
    const author = req.userId;
    const extension = image.originalname.split('.')[1];
    const newFilename = image.path + '.' + extension;
    fs.rename(image.path, newFilename, function (err) {
        if (err) throw err;
    });
    const cover = newFilename.replace("assets", "http://localhost:5000").replace(/\\/g,"/");
    const postValues = {...req.body, cover, author};
    const post = await Posts.create(postValues);
    res.status(StatusCodes.CREATED).send({post});
}

const getPost = async(req, res) =>{
    const postId = req.params.id;
    const posts = await Posts.findById(postId).populate("author", ["username", "-_id"]);
    res.status(StatusCodes.OK).json(posts);
}

const updatePost = async(req, res) =>{
    const author = req.userId;
    const postId = req.params.id;
    const post = await Posts.findById(postId);
    if(!post) return res.status(StatusCodes.NOT_FOUND).send({message: 'No post found'});
    if(post.author != author) return res.status(StatusCodes.UNAUTHORIZED).send({message: 'Not authorized'});

    let postValues = req.body;
    const image = req.file;

    if(image){
        const extension = image.originalname.split('.')[1];
        const newFilename = image.path + '.' + extension;
        fs.rename(image.path, newFilename, function (err) {
            if (err) throw err;
        });
        const cover = newFilename.replace("assets", "http://localhost:5000").replace(/\\/g,"/");
        postValues = {...postValues, cover};
    }
    const postUpdate = await Posts.findOneAndUpdate({_id: postId}, postValues, {new: true, runValidators: true});
    res.status(StatusCodes.OK).send({postUpdate});
}

const deletePost = async(req, res) =>{
    console.log(req.body);
    const author = req.userId;
    const postId = req.params.id;
    const post = await Posts.findById(postId);
    if(!post) return res.status(StatusCodes.NOT_FOUND).send({message: 'No post found'});
    if(post.author != author) return res.status(StatusCodes.UNAUTHORIZED).send({message: 'Not authorized'});

    const postdelete = await Posts.findOneAndDelete({_id: postId});
    res.status(StatusCodes.OK).send({postdelete});
}

module.exports = {getAllPosts, createPost, getPost, updatePost, deletePost}