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
    text: "`testing inline keyboard`",
    options: {
        parse_mode: "Markdown",
        reply_markup: {
            inline_keyboard: [
                /* [
                    {
                        text: "Link",
                        url: "https://nizarmah.me/"
                    }
                ] */ // in case of url button, but you can't use different types in one keyboard. so if you use url, all must be urls. same for others.
                [
                    {
                        text: "Some Button",
                        callback_data: "someButtonCallback"
                    }
                ],
                [
                    {
                        text: "Other Button",
                        callback_data: "otherButtonCallback"
                    }
                ]
            ]
        }
    }
}, function (error, data) {
    if (error) throw error;
    return res.send(data);
});

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
        // using the getUpdates to actually treat the new updates
        for (var i = 0; i < response.result.length; i++) {
            if (response.result[i].callback_query != null) {
                if (response.result[i].callback_query.data == "someButtonCallback") { // a callback_data of someButtonCallback
                    Bot.answerCallbackQuery({ // answering the callback
                        callback_query_id: response.result[i].callback_query.id,
                        text: "Answering Callback Query From : " + response.result[i].callback_query.from.first_name,
                        show_alert: false
                    });
                } else if (response.result[i].callback_query.data == "otherButtonCallback") {
                    Bot.answerCallbackQuery({
                        callback_query_id: response.result[i].callback_query.id,
                        text: "Answering Callback Query From : " + response.result[i].callback_query.from.first_name,
                        show_alert: true
                    });
                }
            }
        }
    });
}, 1000);