var express = require("express");
var router = express.Router();
var db = require('../model');
var User = db.User

module.exports = function (passport){
    router.post('/signup',function(req,res){
        console.log(req.body);
        let user = new User();
        req.body.password = user.hashpassword(req.body.password);
        User.create(req.body,(err,data)=>{
            if(err&& err.code === 11000){
                res.send('email already taken')
            }
            else{
                console.log(data);
                res.send('succesfully created user');

            }
        })
    });
    router.post('/login',function(req,res,next){
        passport.authenticate('local',(err,user,info)=>{
            if (err){
                return next(err)
            }
            if(user){
                req.login(user,(err)=>{
                    
                })
            }
        })
    })
}