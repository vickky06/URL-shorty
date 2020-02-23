//POST route
const express = require('express');
const router = express.Router();
const validUrl = require('valid-url'); //check for Valid URL
const shortid = require('shortid'); //shortID createor
//const config = require('config');
const Url = require('../models/Url');


//@route POST req-> /api/url/shorten
//@desc create a short URL


router.post('/shorten', async (req, res) => { //api/url has been already connected in index under app.use()
    const {
        longUrl
    } = req.body
    const baseUrl = "http://"+req.headers.host;

    //check if valid URL for base

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('invalid Base URL');
    }

    //Create url code
    let urlCode = shortid.generate();

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

            if (url) {
                res.status(200).json({
                    url,
                    message: "URL is already shortened! Please use the same!!"
                });
            } else {
                //construct URL -->New
                const shortUrl = baseUrl + '/' + urlCode

                url = new Url({
                    longUrl: longUrl,
                    shortUrl: shortUrl,
                    urlCode: urlCode,
                    date: Date.now()
                });

                await url.save();

                res.status(200).json(url)


            }
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err
            })
        }
    }


});

module.exports = router;