const express = require("express");
const body_parser = require("body-parser");
const app = express();

var path = __dirname + '/public/';
var port = 8080;

var cors = function (req, res, next) {
    var whitelist = [
        'http://localhost:4200',
        'http://localhost:35791',
        'http://fireshellstudio.com:4200',
        'http://fireshellstudio.com:35791',
        'http://fireshellstudio.com:57913',
        'http://fireshellstudio.com:4200',
        'http://fireshellstudio.com',
        'http://fireshellstudio.com:80',
        "http://fireshellstudio.com:2648"
    ];
    var origin = req.headers.origin;
    if (whitelist.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
};

app.use(express.static(path));
app.use(body_parser.json()); // support json encoded bodies
app.use(cors);

app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});
