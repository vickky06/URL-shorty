const mongoose = require('mongoose');



const urlSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        unique: true
    },
    longUrl: {
        type: String

    },
    shortUrl: {
        type: String,
        unique: true
    },
    date: {
        type: Date,
    }
})



module.exports = mongoose.model('Url', urlSchema);