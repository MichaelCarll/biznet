const router = require('express').Router();

router.get('/',function(req,res){
    console.log("hit this request")
    res.status(503).send('Site is currently under construction!')
})