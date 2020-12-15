const express = require('express');
const router = express.Router();
const User = require('../models/user')


router.post('/signin', (req, res) => {

    // User.findOne({ email:req.body.email })
    // .exec((error, user) => {
    //     if(error || !user) return res.status(400).json({
    //         message: "User not found"
    //     });

});

router.post('/signup', (req, res) => {


    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) return res.status(400).json({
            message: "User already registered"
        });
        
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
         });
        
         _user.save((error, date) => {
             if(error){
                 return res.status(400).json({
                     message: 'Something went wrong'
                 });
             }

             if(data){
                 return res.status(201).json({
                     user:data
                 })
             }
         });
    });

});

module.exports = router;