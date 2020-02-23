const moongoose = require("mongoose");
//const config  = require('config');
///const db =  config.get('mongoURI');

///connect db

const connectDB = async()=>{
    try{
        await moongoose.connect(process.env.MONGOURI,{
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