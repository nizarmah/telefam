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

Bot.sendMessage({
    chat_id: /* your user_id here ( you can grab that by sending a message to the bot, and checking the updates ( /getUpdates ) ) */,
    text: "*Hey* _fam_, `Telefam` here!",
    options: {
        parse_mode: "Markdown", // can be also HTML
        reply_to_message_id: /* your message id, you can get it using /getUpdates */, // so that the bot quotes your message
        reply_markup: {
            force_reply: true // like the user pressed the message and then reply
        }
    }
});