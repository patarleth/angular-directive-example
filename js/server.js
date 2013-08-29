var mongo, db, express, monk, expressServer, app, fs, route_functions, jayschema, _eval;

fs = require('fs');
_eval = require('eval');

mongo = require('mongodb');
express = require('express');
app = express();
app.use(express.bodyParser());
app.enable('jsonp callback');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.redirect("/index.html");
});

expressServer = app.listen(process.env.npm_package_config_port, '0.0.0.0');
