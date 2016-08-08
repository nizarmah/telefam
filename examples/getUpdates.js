'use strict';

var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    http = require('http'),
    index = require('./routes/index'),
    TelegramBot = require('./routes/telefam');

var app = express(),
    server = http.createServer(app).listen(80);

app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.send("Telefam Bot Prototype");
});

var Bot = new TelegramBot(/* bot token here */);

app.get('/getUpdates', function (req, res) {
    Bot.getUpdates(function (error, updates) {
        res.send(updates);
    });
});

// anything outside would run automatically.
// this is similar to polling. it kind of is polling

// note : this you won't need when using a webhook. ( similar to sockets ) 

var lastUpdateId = 0;
setInterval(function () {
    Bot.getUpdates({
        options: {
            offset: lastUpdateId++
        }
    }, function (error, response) {
        if (error) throw error;
        
        if (response.result.length > 0)
            lastUpdateId = response.result[response.result.length - 1].update_id;

        for (var i = 0; i < response.result.length; i++) {
            // do stuff with the new updates here
        }
    });
}, 1000);