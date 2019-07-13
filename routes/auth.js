var express = require("express");
var router = express.Router();
var db = require('../models');
var User = db.User

module.exports = function (passport){
    router.post('/signup',function(req,res){
        console.log(req.body);
        let user = new User();
        req.body.password = User.hashPassword(req.body.password);
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
                    //if errors arent found when logging in
                    if(err){
                        return next(err)
                    }
                    //complete a log of handshake
                    res.json({success: req.user ? 'Yes' : 'No', user : req.user})
                })
            }
            else{
                res.send('Server Error')
            }
        })(req,res,next)
    })
    //logout api route
    router.get("/logout",function(req,res){
        console.log('logout start')
        req.logout();
        res.json({success: req.user ? "No" : "Yes"})
    })
    //checking to see if still logged in to avoid unwanted error codes 
    router.get("/test",function(req,res){
        if(req.user){
            res.send("You're good")
        }
        else{
            res.send("Im freaking tf out")
        }
    });
    //this will ensure that the server executes this code
    console.log("herere")
    return router;
}