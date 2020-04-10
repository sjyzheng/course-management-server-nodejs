var express = require('express');
var app = express();



app.get('/', function (req, res) {
    res.send("This is the Course Manager Server")
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quiz.controller.server')(app);
require('./controllers/question.controller.server')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listending on port ${port}...`));
