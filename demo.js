'use strict';

var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    /* http = require('http'), */ // for http
    https = require('https'), // for https
    request = require('request'),
    index = require('./routes/index'),
    Telefam = require('./routes/telefam');
    
var credPaths = { // for https
        key: 'key.pem',
        cert: 'cert.crt'
    },
    cred = { // for https
        key: fs.readFileSync(credPaths.key, 'utf8'),
        cert: fs.readFileSync(credPaths.cert, 'utf8')
    };

var app = express(),
    /* server = http.createServer(app).listen(8080); */ // for http
    server = https.createServer(cred, app).listen(443); // for https

app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.send("Telefam Bot Prototype")
});

var Fam = new Telefam('<token>');

app.get('/getMe', function (req, res) {
    Fam.getMe(function (error, info) {
        res.send(info);
    });
});

app.get('/getUpdates', function (req, res) {
    Fam.getUpdates(function (error, updates) {
        res.send(updates);
    });
});

app.get('/setWebhook/:url/:certificate', function (req, res) {
    var url = req.params.url;
    var certificate = req.params.certificate;

    Fam.setWebhook({
        url: url,
        certificate: certificate
    }, function (error, data) {
        res.send(data);
    });
});

app.get('/Certificate', function (req, res){
    fs.readFile(path.join(__dirname, credPaths.cert), {encoding: 'utf-8'}, function(error, data){
        if (error) return error;
        return res.send(data);
    });
});

app.use('/Webhook', function (req, res) {

});

var lastUpdateId = 0;
setInterval(function () {
    Fam.getUpdates({
        options: {
            offset: lastUpdateId++
        }
    }, function (error, response) {
        if (error) throw error;
        
        if (response.result.length > 0)
            lastUpdateId = response.result[response.result.length - 1].update_id;

        for (var i = 0; i < response.result.length; i++) {
            
        }
    });
}, 1000);