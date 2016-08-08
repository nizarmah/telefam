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

Bot.sendPhoto({
    chat_id: /* your user_id here ( you can grab that by sending a message to the bot, and checking the updates ( /getUpdates ) ) */,
    photo: {
        path: /* path to your local photo */
    },
    /* photo: file_id ~ in case of preuploaded photo that's in the bot's telegram files */
});