const express   =   require("express");
const passport = require('passport');
const mongoose = require('mongoose');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const formData = require('express-form-data');
const bodyParser = require('body-parser')
//initalize express
const app   =   express();
//set port
const port = process.env.PORT || 3001;
//serve static files
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
};
//connect to MongoDB with an error listener
app.use(logger('dev'));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/biznet',{ useNewUrlParser:true });
mongoose.connection.once('open',function(){
    console.log('connection has been made')
}).on('error',function(err){
    console.log('connection error: \n',err)
});

//middleware for api's and for compatibilty with React framework
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(formData.parse());
app.use(bodyParser.json());
//middleware for user authentication, using passport library
app.use(cookieParser());
app.use(session({ secret: "bizz",
saveUninitialized:false,
resave:false }));
app.use(passport.initialize());
app.use(passport.session());


require('./routes')

app.get('/',function(req,res){
    console.log(req)
    res.status(503).send('Site is currently under construction!')
});

app.listen(port, function (){
    console.log('listening on localhost:'+ port)
})