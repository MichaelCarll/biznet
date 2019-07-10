const express   =   require("express");
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const formData = require('express-form-data');
const bodyParser = require('body-parser');
//initalize express
<<<<<<< HEAD
const app   =   express();
<<<<<<< HEAD

const port = process.env.PORT || 3000;
=======
=======
const app = express();
>>>>>>> 597f319ab03bc40ac9ce9bfbda96ab441c7ac0b1
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
<<<<<<< HEAD

>>>>>>> a39a1e27ae37d7083ebf0699a35385cfdfd407af

=======
//linking routes
>>>>>>> 597f319ab03bc40ac9ce9bfbda96ab441c7ac0b1
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
