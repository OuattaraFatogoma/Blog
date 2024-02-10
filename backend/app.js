require('dotenv').config();
require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');

// import routes
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');

// import middlewares
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const notFoundMiddleware = require('./middlewares/notFound');

// security 
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
//middleware 
app.use(express.json());
app.use(cors());

// routes 
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/posts", postsRoutes);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

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