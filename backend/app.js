require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// import routes
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');

// security 
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


// routes 
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/posts", postsRoutes);

const start = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connection established");
        app.listen(port, console.log("Server is listening on port " + port));
    } catch (error) {
        console.log(error);
    }
}

start();