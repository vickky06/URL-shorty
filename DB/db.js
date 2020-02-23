const moongoose = require("mongoose");
const Q = "mongodb+srv://admin:N04KbUkAqgdGE08p@cluster0-aqnpz.mongodb.net/URL-appheroku?retryWrites=true&w=majority";
const URI = process.env.MONGOURI|| Q
const connectDB = async()=>{
    try{
       console.log(URI);
        //await moongoose.connect(process.env.MONGOURI,{
            await moongoose.connect(URI,{
            useCreateIndex: true,
            useNewUrlParser :true,
            useUnifiedTopology: true
        });
        console.log("****************DB connected!!**********************")
    }
    catch(error){

        console.log("*******************DB failed to connect!!*********************");
        console.log("Error as "+ error);
        
    }
};

module.exports = connectDB; 