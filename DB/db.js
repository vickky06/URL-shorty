const moongoose = require("mongoose");
//const config  = require('config');
///const db =  config.get('mongoURI');

///connect db

const connectDB = async()=>{
    try{
        await moongoose.connect("mongodb+srv://mongoDB:qwerty123@cluster0-csyxa.mongodb.net/test?retryWrites=true&w=majority",{
            useCreateIndex: true,
            useNewUrlParser :true,
            useUnifiedTopology: true
        });
        console.log("****************DB connected!!**********************")
    }
    catch{

        console.log("*******************DB failed to connect!!*********************");
        process.exit(1);
    }
};

module.exports = connectDB; 