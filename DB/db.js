const moongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await moongoose.connect(process.env.MONGOURI,{
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