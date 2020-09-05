const express = require('express');
const router = express.Router();

const { signup, signin, requireSignIn } = require('../controller/auth');

const {validateSigninRequest,validateSignupRequest,isRequestValidated} = require('../validators/auth');


router.post('/signin',validateSigninRequest,isRequestValidated,signin);

router.post('/signup',validateSignupRequest,isRequestValidated,signup);

router.post('/profile',requireSignIn,(req,res) => {
    res.status(200).json({
        user: "profile"
    })
})

module.exports = router;
