//ShortURL
const express = require('express');
const router = express.Router();
const memory_cache = require('../middleware/memory-cache'); ///client side
const file_cache = require('../middleware/flat-cache'); ///server side

const Url = require('../models/Url');

//@route GET /:code
//@desc Redirect to long/original URL

router.get('/:code',  async (req, res) => {
    console.log("code : ", req.params.code)
    try {
        const url = await Url.findOne({
            urlCode: req.params.code
        });
        console.log(url.longUrl);
        if (url) { //found
            return res.redirect(url.longUrl); ///redirecte
        } else {
            //nothing found
            return res.status(404).json({
                message: 'No URL found!!'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Error!!',
            error: err
        })
    }
})

module.exports = router;