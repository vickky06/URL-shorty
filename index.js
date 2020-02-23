const express = require('express');
const app = express();
//const config = require('config');
require('./DB/db');
//const URL = require('./models/Url')
app.use(express.json({
        extended: false,
    }

));
const getURL = require('./routes/getURL'),
    generalUrl = require('./routes/url'),
    customURL = require('./routes/customUrl'),
    logIN = require('./routes/login'),
    logOUT = require('./routes/logout'),
    signUP = require('./routes/signUp'),
    TSP = require('./routes/adminTimeSeriesPlot');



app.set('view engine', 'hbs'); ///Handle Bars
app.use(getURL);
app.use(generalUrl);
app.use(customURL);
app.use(logIN);
app.use(logOUT);
app.use(signUP);
app.use(TSP);


////Connect to DB


// // //testing ///////////////////////////////////////////////////////////////////////////////////

// app.get('/test', async (req, res) => {
//     try {
//         let x = ['2020/1/21', '2020/1/22'];
//         let y = [2, 2];
//         let z = {
//             x,
//             y
//         }
//         res.render('timeSeriesPlot', {
//             z
//         })
//     } catch {
//         console.log("err")
//     }

// });



//  app.get('/api/url/test',(req,res)=>{
//      res.send("http://"+req.headers.host)
//  })  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////Define Routes
// app.use('/', require('./routes/getURL'));
// app.use('/api/url', require('./routes/url'));
// app.use('/api/url/custom', require('./routes/customUrl')); //////repari required
// app.use('/api/url/', require('./routes/login')); ///admin Login
// app.use('/api/url/', require('./routes/signUp')); //signUP
// app.use('/api/url/', require('./routes/logout'));  ///Logout
// app.use('/api/url/', require('./routes/adminTimeSeriesPlot'));  


//const PORT = config.get('port');
const PORT = process.env.PORT||5000;
//console.log(process.env.BASE_URL)

app.listen(PORT, () => console.log(`****************SERVER UP@!!${PORT}************************`)); 