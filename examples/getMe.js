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

app.get('/getMe', function (req, res) {
    Bot.getMe(function (error, info) {
        res.send(info);
    });
});