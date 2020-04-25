var bodyParser = require('body-parser')
var express = require('express');
var app = express();

const url = 'mongodb://user:userpassword1@ds031213.mlab.com:31213/heroku_xmmh98qs'
const mongoose = require('mongoose')
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://wbdv-sp20-jz-server-node-a9.herokuapp.com/');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(function (req,res, next) {
    var allowedOrigins = ['http://localhost:4200', 'http://localhost:8020', 'https://wbdv-sp20-jz-client-angular.herokuapp.com', `https://wbdv-sp20-jz-client-angular-a9.herokuapp.com`];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials',
        'true');
    next();
});


var session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}))

require('./controllers/quiz.controller.server')(app);
require('./controllers/question.controller.server')(app);
require('./controllers/quiz-attempts.controller.server')(app);
require('./controllers/users.cotroller.server')(app);

app.get('/', function (req, res) {
    res.send("This is the Course Manager Server")
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listending on port ${port}...`));
