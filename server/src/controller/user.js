const User = require('../models/user');
exports.signup = (req,res) => {
    User.findOne({email: req.body.email})
    .exec((error,user) => {
        if(user){
            return res.status(200).json({
                message: "USer already exists"
            })
        }

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString()
        })

        _user.save((err,data) => {
            if(err){
                return res.status(400).json({
                    message: 'Something went wrong'
                })
            }

            if(data){
                return res.status(201).json({
                    message: "User created successfully"
                })
            }
        })
    })
}