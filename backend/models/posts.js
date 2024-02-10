const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please enter a title"]
    },
    summary:{
        type: String,
        required: [true, "Please enter a summary"]
    },
    cover:{
        type: String,
        required: [true, "Please enter a cover"]
    },
    content:{
        type: String,
        required: [true, "Please enter a content"]
    },
    author:{
        type: String,
        required: [true, "Author require"]
    },
}, {timestamps: true});

module.exports = mongoose.model("Posts", PostSchema);

