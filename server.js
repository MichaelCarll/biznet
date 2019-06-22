const express   =   require("express");

const app   =   express();

const port = process.env.PORT || 3001;

require('./routes')

app.get('/',function(req,res){
    console.log(req)
    res.status(503).send('Site is currently under construction!')
});

app.listen(port, function (){
    console.log('listening on localhost:'+ port)
})