const express = require('node_modules/express');
const passport = require('node_modules/passport');
const session = require('node_modules/express-session');
const cookieParser = require('node_modules/cookie-parser');
const formData = require('node_modules/express-form-data');
const bodyParser = require('node_modules/body-parser');
//initalize express
const app = express();
//set port
const port = process.env.PORT || 3001;
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

// const passportRoute = require("./routes/auth")(passport);
// require("./passport")(passport);
// app.use('/auth', require("./routes/auth")(passport));
// app.use(require('./routes'))

//server listenig and db connection
var db = require("./models")
var visitor = db.Visitor;

app.get("/helloworld",function(req,res){
    console.log("hello world ");
    res.send("hello world")
})
db.sequelize.sync().then(function(){
    app.listen(port, function (){
        console.log('listening on localhost:'+ port)
    })
})
app.post('/saveinfo',function(req,res){
    console.log(req.body)
    visitor.create(req.body,(err,data)=>{
        if(err&& err.code === 11000){
            res.send('email already taken')
        }
        else{
            console.log(data);
            res.send('succesfully created user');
        }
    })
})
