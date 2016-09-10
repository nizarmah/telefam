'use strict';

var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    /* http = require('http'), */
    https = require('https'),
    index = require('./routes/index'),
    TelegramBot = require('./routes/telefam');
    
var credPaths = {
        key: 'key.pem',
        cert: 'cert.crt'
    },
    cred = {
        key: fs.readFileSync(credPaths.key, 'utf8'),
        cert: fs.readFileSync(credPaths.cert, 'utf8')
    }; // certificate setup for https server.

var app = express(),
    /* server = http.createServer(app).listen(8080); */
    server = https.createServer(cred, app).listen(443); // setup an https server. with a certificate.

app.set('view engine', 'jade');

app.get('/', index);

var Bot = new TelegramBot(/* bot token here */);

// i personally like to set it like that
// instead of it when running.
// so for me setting the webhook was https://127.0.0.1/setWebhook/https://127.0.0.1/Webhook/https://127.0.0.1/Certificate
// https://127.0.0.1/setWebhook is to call the function
// https://127.0.0.1/Webhook or /Certificate are the parameters
// /Webhook is the place where the updates will be POSTED at
// /Certificate is to pass the Certificate of the HTTPS Web Engine
// Note that the Certificate is optional and you can not pass it
app.get('/setWebhook/:url/:certificate', function (req, res) {
    var url = req.params.url;
    var certificate = req.params.certificate; // certificate path

    Bot.setWebhook({
        url: url,
        certificate: certificate
    }, function (error, data) {
        res.send(data);
    });
});

app.use('/Webhook', function (req, res) {
    // you'll receive here an Updates listed in the first under Getting Updates
    // then you can treat your new updates
});