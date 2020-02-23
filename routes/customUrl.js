///Return custom URL
const express = require('express');
const router = express.Router();
const validUrl = require('valid-url'); //check for Valid URL
//const config = require('config');


const Url = require('../models/Url');

//@router POST req-> /api/url/custom/customUrl
//@description create a customURL

router.post('/customUrl', async (req, res) => {
    const {
        longUrl,
        customTag
    } = req.body;
    //check if valid URL for base
    console.log("CustomURL is called")
    console.log(longUrl + '/' + customTag)

    const baseUrl = "http://"+req.headers.host;
    

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('invalid Base URL');
    }

    //URL generAtion shortURL
    // let urlCode = shortid.generate().substr(0,1).toLowerCase()
    //                 +customTag.toUpperCase()
    //             +shortid.generate().substr(0,1).toLowerCase();
    let urlCode = customTag;
    let shortUrl = baseUrl + '/' + urlCode
    //Long URL check
    if (!validUrl.isUri(longUrl)) {
        return res.status(401).json({
            error: 'Invalid long URL'
        });
    } else {
        try {
            let url = await Url.findOne({
                longUrl
            });
            //let custom = await Url.findOne({cus})



            if (url) {
                res.status(200).json({
                    url,
                    message: "URL is already shortened! Please use the same!!"
                });
            } else {
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode: urlCode,
                    date: Date.now()
                });

                await url.save();

                res.status(200).json(url)


            }
        } catch (err) {
            console.log(err.errmsg);
            res.status(500).json({
                message: "Error occured while URL construction!",
                error: err.errmsg
            })
        }
    }




});

module.exports = router;