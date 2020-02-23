const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Url = require('../models/Url');
const isValidDate = require('pretty-easy-date-check');


router.post('/timeSeriesPlot', auth, async (req, res) => {
    console.log("router enabled")
    //router.get('/timeSeriesPlot', async(req,res)=>{      
    try {
        console.log("TRY initiated")
        const regEx = /^\d{2}-\d{2}-\d{4}$/;
        let {
            startTime,
            endTime
        } = req.body;
        let Nstrt = new Date(startTime),
            Nend = new Date(endTime);
        const errMsg = "01: Please provide Start Time and end Time!! " +
            "02: End date must be greater then End date! " +
            "03: Please provide valid Dates ONLY!!"



        if (
            (!((req.body.startTime) && (req.body.endTime))) ||
            (Nstrt.getTime() > Nend.getTime())
        ) {
            console.log("-----------------------------Error with  BODY in IF block----------------------------------")
            res.status(422).send({
                error: "Error occured, something was wrong with Body, please follow the below Guidelines!",
                message: errMsg
            });
        } else {
            try {
                const data = await Url.find({
                    date: {
                        $gte: startTime,
                        $lt: endTime
                    }
                }).sort({
                    date: 'asc'
                });

                if (data.length < 1) {

                    console.log("error", data.length)
                    res.status(400).send({
                        msg: "No data found!"
                    })
                } else {
                    // console.log(data);
                    let dic = {}
                    for (let iData = 0; iData < data.length; iData++) {
                        let date = data[iData].date
                        let fullDate = (date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()).toString()
                        console.log(data[iData].date + '')
                        if (fullDate in dic) {
                            //console.log("value-->dic[fullDate] : ",dic[fullDate])
                            value = dic[fullDate] + 1
                            dic[fullDate] = value
                        } else {
                            dic[fullDate] = 1
                        }
                    }
                    console.log(dic)
                    let label = [],
                        Ndata = [];
                    Object.keys(dic).forEach(function(key) {
                        console.log("key:" + key, "value :" + dic[key]);
                        label.push(key);
                        Ndata.push(dic[key]);
                    });
                    // console.log(label)
                    // console.log(Ndata)

                    res.status(200).send({
                        startTime,
                        endTime,
                        label,
                        Ndata
                    });
                }
            } catch (err) {
                console.log(err);
                res.status(424).send({
                    err
                });
            }

        }

    } catch (e) {
        console.log("error", e)
        res.status(500).send(e);
    }
})

router.get('/timeSeriesPlot', (req, res) => {
    console.log("I am Here!")
    res.render('timeSeriesPlot', );
});

module.exports = router;