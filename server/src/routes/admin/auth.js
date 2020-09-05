const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  requireSignIn,
} = require("../../controller/admin/auth");
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require("../../validators/auth");

router.post("/admin/signin",validateSigninRequest,isRequestValidated, signin);

router.post("/admin/signup",validateSignupRequest,isRequestValidated, signup);

// router.post('/admin/profile',requireSignIn,(req,res) => {
//     res.status(200).json({
//         user: "profile"
//     })
// })

module.exports = router;
