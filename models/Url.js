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

urlSchema.methods.toJSON = function(){
    const user =this
    const userObj = user.toObject()
    
    delete userObj.date
    delete userObj.urlCode
    return userObj
}




module.exports = mongoose.model('Url', urlSchema);