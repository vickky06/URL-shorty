const express = require('express');
const router = express.Router();

const User = require('../models/adminUser');

//@router :post ->/api/login
//description : login the user
router.post('/login',async (req,res)=>
    {
    console.log('**********************************************Login*******************************************\n')
        //console.log(req.body)
            try {
                const user = await User.findUserByCredentials(req.body.email,req.body.password);
                const token = await user.generateAuthToken();
                //console.log(user)
                res.status(200).send({user,token})
            }
            catch(error)
            {  console.log('issue \n'+error)
        
                res.status(400).send({error})
            }
    }
);

module.exports = router;