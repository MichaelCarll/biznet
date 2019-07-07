const express   =   require("express");
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const formData = require('express-form-data');
const bodyParser = require('body-parser');
//initalize express
const app = express();
//set port
const port = process.env.PORT || 3000;
//serve static files
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
};
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
//linking routes
require('./routes')
//serving static files
if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
}
//serving sites
app.get('/',function(req,res){
    res.send("./client/build")
});
//server listenig and db connection
var db = require("./models")
db.sequelize.sync().then(function(){
    app.listen(port, function (){
        console.log('listening on localhost:'+ port)
    })
})
