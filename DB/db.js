const mongoose = require('mongoose')

Promise = require('bluebird');
mongoose.Promise = Promise;
const serverOptions = {
    poolsize:100 ,
    socketOptions:{
        socketTimeoutMS: 5000
        }};
//connect to the database, UrlParser is true, create Index for databse automaticaclly

require('mongoose').Promise = global.Promise

const mongoosePort = process.env.MONGODB_URL 
// console.log('DEV post is '+process.env.MONGODB_URL)
//mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
mongoose.connect(mongoosePort,{
    'useNewUrlParser': true,
    'useFindAndModify':false,
    'useCreateIndex': true,
    'useUnifiedTopology': true,
   // server: serverOptions
}).then(()=>{

    console.log('successfull connection established for '+process.env.MONGODB_URL)

}).catch(error => {
    console.log('an error occured while establishing connection . ERROR : '+error.message)
});

console.log("Connected")