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

///deletion of unnecessary details
urlSchema.methods.toJSON = function(){
    const URL =this
    const urlObj = URL.toObject()
    
    delete urlObj.urlCode
    delete urlObj.date
    return urlObj;
}

module.exports = mongoose.model('Url', urlSchema);