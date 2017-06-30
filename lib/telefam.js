var fs = require('fs'),
	FormData = require('form-data');
	request = require('request');

function Telefam(token) {
	this.token = token;
	this.url = 'https://api.telegram.org/bot' + this.token + '/';
}

Telefam.prototype.constructor = Telefam;

Telefam.prototype._sendRequest = function (url, callback) {
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		return callback(error, body);
	});
};

Telefam.prototype._sendForm = function (url, formData, callback) {
	request.post({
		url: url,
		formData: formData
	}, function (error, response, body) {
		return callback(error, body);
	});
};

Telefam.prototype._setupOptions = function (url, options, callback) {
	if (options != null) {
		var i = 0,
			optionsLength = 0;

		for (var key in options)
			optionsLength++;

		for (var key in options) { i++;
			url = url + "&" + key + "=" + ((typeof options[key] == "object") ? JSON.stringify(options[key]) : options[key]);

			if (i == optionsLength) return callback(url);
		}
	} else return callback(url);
};

Telefam.prototype._setupForm = function (url, formData, options, callback) {
	if (options != null) {
		
		if (options.disable_notification != null)
			formData.disable_notification = options.disable_notification;
		if (options.reply_to_message_id != null)
			formData.reply_to_message_id = options.reply_to_message_id;
		if (options.reply_markup != null)
			formData.reply_markup = JSON.stringify(options.reply_markup);

		return callback(url, formData);
	} else return callback(url, formData);
};

Telefam.prototype.setWebhook = function (squad, callback){
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + 'setWebhook';
	var formData = {  };

	formData.url = squad.url;
	if (squad.certificate != null)
		formData.certificate = fs.createReadStream(squad.certificate);
	if (squad.max_connections != null)
		formData.certificate = squad.max_connections;
	if (squad.allowed_updates)
		formData.allowed_updates = squad.allowed_updates;

	return this._sendForm(url, formData, callback);
};

Telefam.prototype.deleteWebhook = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + 'deleteWebhook';

	this._sendRequest(url, callback);
}

Telefam.prototype.getMe = function (callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + 'getMe';

	this._sendRequest(url, callback);
};

Telefam.prototype.getUpdates = function (squad, callback) {
	if (callback == null) {
		if (typeof squad == "function") {
			callback = squad;
			squad = null;
		}
	}

	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + 'getUpdates';

	if (squad != null) {
		url = url + "?";

		theThis = this;
		return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
	} else return this._sendRequest(url, callback);
};

Telefam.prototype.sendMessage = function (squad, callback) {
	var url = this.url + "sendMessage?chat_id=" + squad.chat_id + "&text=" + squad.text;
	var callback = callback || function (error, res) { return ((error) ? error : res); };

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

Telefam.prototype.forwardMessage = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var forwardmessageurl = this.url + "sendMessage?chat_id" + squad.chat_id + "&from_chat_id=" + squad.from_chat_id + "&message_id=" + squad.message_id;
	if (squad.options != null)
		forwardmessageurl = forwardmessageurl + "&disable_notification=" + squad.options.disable_notification;

	return this._sendRequest(forwardmessageurl, callback);
};

Telefam.prototype.sendPhoto = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	if (typeof squad.photo == "object") {
		var url = this.url + "sendPhoto";
		
		if (squad.photo.path != null && squad.photo.url == null) {
			var formData = {  };

			formData.chat_id = squad.chat_id;

			if (squad.caption != null)
				formData.caption = squad.caption;

			formData.photo = fs.createReadStream(squad.photo.path);

			theThis = this;
			return this._setupForm(url, formData, squad.options, function (url, formData) { theThis._sendForm(url, formData, callback); });
		} else if (squad.photo.path == null && squad.photo.url != null) {
			var url = this.url + "sendPhoto?chat_id=" + squad.chat_id + "&photo=" + squad.photo.url;

			if (squad.caption != null)
				url = url + "&caption=" + squad.caption;

			theThis = this;
			return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
		}
	} else {
		var url = this.url + "sendPhoto?chat_id=" + squad.chat_id + "&photo=" + squad.photo;

		if (squad.caption != null)
			url = url + "&caption=" + squad.caption;

		theThis = this;
		return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
	}
};

Telefam.prototype.sendAudio = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	if (typeof squad.audio == "object") {
		if (squad.audio.path != null && squad.audio.url == null) {
			var url = this.url + "sendAudio";
			var formData = {  };

			formData.chat_id = squad.chat_id;

			if (squad.duration != null)
				formData.duration = squad.duration;
			if (squad.performer != null)
				formData.performer = squad.performer;
			if (squad.title != null)
				formData.title = squad.title;
			if (squad.caption != null)
				formData.caption = squad.caption;

			formData.audio = fs.createReadStream(squad.audio.path);

			theThis = this;
			return this._setupForm(url, formData, squad.options, function (url, formData) { theThis._sendForm(url, formData, callback); });
		} else if (squad.audio.path == null && squad.audio.url != null) {
			var url = this.url + "sendAudio?chat_id=" + squad.chat_id + "&audio=" + squad.audio.url;

			if (squad.duration != null)
				url = url + "&duration=" + squad.duration;
			if (squad.performer != null)
				url = url + "&performer=" + squad.performer;
			if (squad.title != null)
				url = url + "&title=" + squad.title;
			if (squad.caption != null)
				url = url + "&caption=" + squad.caption;

			theThis = this;
			return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
		}
	} else {
		var url = this.url + "sendAudio?chat_id=" + squad.chat_id + "&audio=" + squad.audio;

		if (squad.duration != null)
			url = url + "&duration=" + squad.duration;
		if (squad.performer != null)
			url = url + "&performer=" + squad.performer;
		if (squad.title != null)
			url = url + "&title=" + squad.title;
		if (squad.caption != null)
			url = url + "&caption=" + squad.caption;

		theThis = this;
		return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
	}
};

Telefam.prototype.sendDocument = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	if (typeof squad.document == "object") {
		if (squad.document.path != null && squad.document.url == null) {
			var url = this.url + "sendDocument";
			var formData = {  };

			formData.chat_id = squad.chat_id;

			if (squad.caption != null)
				formData.caption = squad.caption;

			formData.document = fs.createReadStream(squad.document.path);

			theThis = this;
			return this._setupForm(url, formData, squad.options, function (url, formData) { theThis._sendForm(url, formData, callback); });
		} else if (squad.document.path == null && squad.document.url != null) {
			var url = this.url + "sendDocument?chat_id=" + squad.chat_id + "&document=" + squad.document.url;

			if (squad.caption != null)
				url = url + "&caption=" + squad.caption;

			theThis = this;
			return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
		}
	} else {
		var url = this.url + "sendDocument?chat_id=" + squad.chat_id + "&document=" + squad.document;

		if (squad.caption != null)
			url = url + "&caption=" + squad.caption;

		theThis = this;
		return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
	}
};

Telefam.prototype.sendSticker = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	if (typeof squad.sticker == "object") {
		if (squad.sticker.path != null && squad.sticker.url == null) {	
			var url = this.url + "sendSticker";
			var formData = {  };

			formData.chat_id = squad.chat_id;

			formData.sticker = fs.createReadStream(squad.sticker.path);

			theThis = this;
			return this._setupForm(url, formData, squad.options, function (url, formData) { theThis._sendForm(url, formData, callback); });
		} else if (squad.sticker.path == null && squad.sticker.url != null) {
			var url = this.url + "sendSticker?chat_id=" + squad.chat_id + "&sticker=" + squad.sticker.url;

			theThis = this;
			return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
		}
	} else {
		var url = this.url + "sendSticker?chat_id=" + squad.chat_id + "&sticker=" + squad.sticker;

		theThis = this;
		return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
	}
};

Telefam.prototype.sendVideo = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	if (typeof squad.video == "object") {
		if (squad.video.path != null && squad.video.url == null) {	
			var url = this.url + "sendVideo";
			var formData = {  };

			formData.chat_id = squad.chat_id;

			if (squad.duration != null)
				formData.duration = squad.duration;
			if (squad.width != null)
				formData.width = squad.width;
			if (squad.height != null)
				formData.height = squad.height;
			if (squad.caption != null)
				formData.caption = squad.caption;

			formData.video = fs.createReadStream(squad.video.path);

			theThis = this;
			return this._setupForm(url, formData, squad.options, function (url, formData) { theThis._sendForm(url, formData, callback); });
		} else if (squad.video.path == null && squad.video.url != null) {
			var url = this.url + "sendVideo?chat_id=" + squad.chat_id + "&video=" + squad.video.url;

			if (squad.duration != null)
				url = url + "&duration=" + squad.duration;
			if (squad.width != null)
				url = url + "&width=" + squad.width;
			if (squad.height != null)
				url = url + "&height=" + squad.height;
			if (squad.caption != null)
				url = url + "&caption=" + squad.caption;

			theThis = this;
			return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
		}
	} else {
		var url = this.url + "sendVideo?chat_id=" + squad.chat_id + "&video=" + squad.video;

		if (squad.duration != null)
			url = url + "&duration=" + squad.duration;
		if (squad.width != null)
			url = url + "&width=" + squad.width;
		if (squad.height != null)
			url = url + "&height=" + squad.height;
		if (squad.caption != null)
			url = url + "&caption=" + squad.caption;

		theThis = this;
		return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
	}
};

Telefam.prototype.sendVoice = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	if (typeof squad.voice == "object") {
		if (squad.voice.path != null && squad.voice.url == null) {	
			var url = this.url + "sendVoice";
			var formData = {  };

			formData.chat_id = squad.chat_id;

			if (squad.duration != null)
				formData.duration = squad.duration;
			if (squad.caption != null)
				formData.caption = squad.caption;

			formData.voice = fs.createReadStream(squad.voice.path);

			theThis = this;
			return this._setupForm(url, formData, squad.options, function (url, formData) { theThis._sendForm(url, formData, callback); });
		} else if (squad.voice.path == null && squad.voice.url != null) {
			var url = this.url + "sendVoice?chat_id=" + squad.chat_id + "&voice=" + squad.voice.url;

			if (squad.duration != null)
				url = url + "&duration=" + squad.duration;
			if (squad.caption != null)
				url = url + "&caption=" + squad.caption;

			theThis = this;
			return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
		}
	} else {
		var url = this.url + "sendVoice?chat_id=" + squad.chat_id + "&voice=" + squad.voice;

		if (squad.duration != null)
			url = url + "&duration=" + squad.duration;
		if (squad.caption != null)
			url = url + "&caption=" + squad.caption;

		theThis = this;
		return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
	}
};

Telefam.prototype.sendLocation = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "sendLocation?chat_id=" + squad.chat_id + "&latitude=" + squad.latitude + "&longitude=" + squad.longitude;

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

Telefam.prototype.sendVenue = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "sendVenue?chat_id=" + squad.chat_id + "&latitude=" + squad.latitude + "&longitude=" + squad.longitude + "&title=" + squad.title + "&address=" + squad.address;

	if (squad.foursquare_id != null)
		url = url + "&foursquare_id=" + squad.foursquare_id;

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

Telefam.prototype.sendContact = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "sendContact?chat_id=" + squad.chat_id + "&phone_number=" + squad.phone_number + "&first_name=" + squad.first_name;

	if (squad.last_name != null)
		url = url + "&last_name=" + squad.last_name;

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

Telefam.prototype.sendChatAction = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "sendChatAction?chat_id=" + squad.chat_id + "&action=" + squad.action;

	return this._sendRequest(url, callback);
};

Telefam.prototype.getUserProfilePhotos = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "getUserProfilePhotos?user_id=" + squad.user_id;

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

Telefam.prototype.getFile = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "getFile?file_id=" + squad.file_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.kickChatMember = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "kickChatMember?chat_id=" + squad.chat_id + "&user_id=" + squad.user_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.unbanChatMember = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "unbanChatMember?chat_id=" + squad.chat_id + "&user_id=" + squad.user_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.answerCallbackQuery = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "answerCallbackQuery?callback_query_id=" + squad.callback_query_id;

	if (squad.text != null)
		url = url + "&text=" + squad.text;
	if (squad.show_alert != null)
		url = url + "&show_alert=" + squad.show_alert;
	if (squad.url != null)
		url = url + "&text=" + squad.url;
	if (squad.cache_time != null)
		url = url + "&show_alert=" + squad.cache_time;

	return this._sendRequest(url, callback);
};

Telefam.prototype.editMessageText = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "editMessageText?";

	if (squad.inline_message == "null")
		url = url + "chat_id=" + squad.chat_id + "&message_id=" + squad.message_id;
	else
		url = url + "inline_message_id=" + squad.inline_message_id;

	url = url + "&text=" + squad.text; 

	theThis = this;
	return this._setupOptions(url, squad.options, function () { theThis._sendRequest(url, callback); });
};

Telefam.prototype.editMessageCaption = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "editMessageCaption?";

	if (squad.inline_message == "null")
		url = url + "chat_id=" + squad.chat_id + "&message_id=" + squad.message_id;
	else
		url = url + "inline_message_id=" + squad.inline_message_id;

	url = url + "&caption=" + squad.caption; 

	theThis = this;
	return this._setupOptions(url, squad.options, function () { theThis._sendRequest(url, callback); });
};

Telefam.prototype.editMessageReplyMarkup = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "editMessageReplyMarkup?";

	if (squad.inline_message == "null")
		url = url + "chat_id=" + squad.chat_id + "&message_id=" + squad.message_id;
	else
		url = url + "inline_message_id=" + squad.inline_message_id;

	if (squad.reply_markup != null)
		url = url + "&reply_markup=" + squad.reply_markup;

	this._sendRequest(url, callback);
};

Telefam.prototype.answerInlineQuery = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "answerInlineQuery?inline_query_id=" + squad.inline_query_id + "&results=" + JSON.stringify(squad.results);

	theThis = this;
	return this._setupOptions(url, squad.options, function () { theThis._sendRequest(url, callback); });    
};

// Start - Changes : May 22, 2016

Telefam.prototype.getChat = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "getChat?chat_id=" + squad.chat_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.leaveChat = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "leaveChat?chat_id=" + squad.chat_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.getChatAdministrators = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "getChatAdministrators?chat_id=" + squad.chat_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.getChatMember = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "getChatMember?chat_id=" + squad.chat_id + "&user_id=" + squad.user_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.getChatMembersCount = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "getChatMembersCount?chat_id=" + squad.chat_id;

	return this._sendRequest(url, callback);
};

// End - Changes : May 22, 2016

// Start - Changes : October 3, 2016

Telefam.prototype.getWebhookInfo = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error: res); };
	var url = this.url + "getWebhookInfo";

	return this._sendRequest(url, callback);
};

Telefam.prototype.sendGame = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "sendGame?chat_id=" + squad.chat_id + "&game_short_name=" + squad.game_short_name;

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

Telefam.prototype.setGameScore = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "setGameScore?user_id=" + squad.user_id + "&score=" + squad.score;

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

Telefam.prototype.getGameScore = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "getGameHighScores?user_id=" + squad.user_id;

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

// End - Changes : October 3, 2016


// Start - Change : May 18, 2017

Telefam.prototype.sendVideoNote = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	if (typeof squad.video_note == "object") {
		if (squad.video_note.path != null && squad.video_note.url == null) {	
			var url = this.url + "sendVideoNote";
			var formData = {  };

			formData.chat_id = squad.chat_id;

			if (squad.duration != null)
				formData.duration = squad.duration;
			if (squad.length != null)
				formData.length = squad.length;

			formData.video_note = fs.createReadStream(squad.video_note.path);

			theThis = this;
			return this._setupForm(url, formData, squad.options, function (url, formData) { theThis._sendForm(url, formData, callback); });
		} else if (squad.video_note.path == null && squad.video_note.url != null) {
			var url = this.url + "sendVideoNote?chat_id=" + squad.chat_id + "&video_note=" + squad.video_note.url;

			if (squad.duration != null)
				url = url + "&duration=" + squad.duration;
			if (squad.length != null)
				url = url + "&length=" + squad.length;

			theThis = this;
			return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
		}
	} else {
		var url = this.url + "sendVideoNote?chat_id=" + squad.chat_id + "&video_note=" + squad.video_note;

		if (squad.duration != null)
			url = url + "&duration=" + squad.duration;
		if (squad.length != null)
			url = url + "&length=" + squad.length;

		theThis = this;
		return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
	}
};

Telefam.prototype.deleteMessage = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "deleteMessage?chat_id=" + squad.chat_id + "&message_id=" + squad.message_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.sendInvoice = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "sendInvoice?chat_id=" + squad.chat_id + "&title=" + squad.title + "&description" + squad.description + "&payload=" + squad.payload + "&provider_token=" + squad.provider_token + "&start_parameter=" + squad.start_parameter + "&currency=" + squad.currency + "&prices=" + JSON.stringify(squad.prices);

	if (squad.photo_url != null)
		url = url + "&photo_url=" + squad.photo_url;
	if (squad.photo_size != null)
		url = url + "&photo_size=" + squad.photo_size;
	if (squad.photo_width != null)
		url = url + "&photo_width=" + squad.photo_width;
	if (squad.photo_height != null)
		url = url + "&photo_height=" + squad.photo_height;
	if (squad.need_name != null)
		url = url + "&need_name=" + squad.need_name;
	if (squad.need_phone_number != null)
		url = url + "&need_phone_number=" + squad.need_phone_number;
	if (squad.need_email != null)
		url = url + "&need_email=" + squad.need_email;
	if (squad.need_shipping_address != null)
		url = url + "&need_shipping_address=" + squad.need_shipping_address;
	if (squad.is_flexible != null)
		url = url + "&is_flexible=" + squad.is_flexible;

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

Telefam.prototype.answerShippingQuery = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "answerShippingQuery?shipping_query_id=" + squad.shipping_query_id + "&ok=" + squad.ok;

	if (squad.shipping_options != null)
		url = url + "&shipping_options=" + squad.shipping_options;
	if (squad.error_message != null)
		url = url + "&error_message=" + squad.error_message;

	return this._sendRequest(url, callback);
};

Telefam.prototype.answerPreCheckoutQuery = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "answerPreCheckoutQuery?pre_checkout_query_id=" + squad.pre_checkout_query_id + "&ok=" + squad.ok;

	if (squad.error_message != null)
		url = url + "&error_message=" + squad.error_message;

	return this._sendRequest(url, callback);
};

// End - Changes : May 18, 2017

// Start - Changes : June 30, 2017

Telefam.prototype.restrictChatMember = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "restrictChatMember?chat_id=" + squad.chat_id + "&user_id=" + squad.user_id;

	if (squad.until_date != null)
		url = url + "&until_date=" + squad.until_date;
	if (squad.can_send_messages != null)
		url = url + "&can_send_messages=" + squad.can_send_messages;
	if (squad.can_send_media_messages != null)
		url = url + "&can_send_media_messages=" + squad.can_send_media_messages;
	if (squad.can_send_other_messages != null)
		url = url + "&can_send_other_messages=" + squad.can_send_other_messages;
	if (squad.can_add_web_page_previews != null)
		url = url + "&can_add_web_page_previews=" + squad.can_add_web_page_previews;

	return this._sendRequest(url, callback);
};

Telefam.prototype.promoteChatMember = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "promoteChatMember?chat_id=" + squad.chat_id + "&user_id=" + squad.user_id;

	if (squad.can_change_info != null)
		url = url + "&can_change_info=" + squad.can_change_info;
	if (squad.can_post_messages != null)
		url = url + "&can_post_messages=" + squad.can_post_messages;
	if (squad.can_edit_messages != null)
		url = url + "&can_edit_messages=" + squad.can_edit_messages;
	if (squad.can_delete_messages != null)
		url = url + "&can_delete_messages=" + squad.can_delete_messages;
	if (squad.can_invite_users != null)
		url = url + "&can_invite_users=" + squad.can_invite_users;
	if (squad.can_restrict_members != null)
		url = url + "&can_restrict_members=" + squad.can_restrict_members;
	if (squad.can_pin_messages != null)
		url = url + "&can_pin_messages=" + squad.can_pin_messages;
	if (squad.can_promote_members != null)
		url = url + "&can_promote_members=" + squad.can_promote_members;

	return this._sendRequest(url, callback);
};

Telefam.prototype.kickChatMember = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "kickChatMember?chat_id=" + squad.chat_id + "&user_id=" + squad.user_id;

	if (squad.until_date != null)
		url = url + "&until_date=" + squad.until_date;

	return this._sendRequest(url, callback);
};

Telefam.prototype.exportChatInviteLink = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); }
	var url = this.url + "exportChatInviteLink?chat_id=" + squad.chat_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.setChatPhoto = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "sendPhoto";
	
	var formData = {  };

	formData.chat_id = squad.chat_id;

	formData.photo = fs.createReadStream(squad.photo.path);

	theThis = this;
	return this._setupForm(url, formData, squad.options, function (url, formData) { theThis._sendForm(url, formData, callback); });
};

Telefam.prototype.deleteChatPhoto = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); }
	var url = this.url + "deleteChatPhoto?chat_id=" + squad.chat_id;

	return this._sendRequest(url, callback);
};

Telefam.prototype.setChatTitle = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); }
	var url = this.url + "setChatTitle?chat_id=" + squad.chat_id + "&title=" + squad.title;

	return this._sendRequest(url, callback);
};

Telefam.prototype.setChatDescription = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); }

	if (squad.description == null)
		squad.description = "";

	var url = this.url + "setChatDescription?chat_id=" + squad.chat_id + "&description=" + squad.description;

	return this._sendRequest(url, callback);
};

Telefam.prototype.pinChatMessage = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); };
	var url = this.url + "pinChatMessage?chat_id=" + squad.chat_id + "&message_id=" + squad.message_id;

	theThis = this;
	return this._setupOptions(url, squad.options, function (url) { theThis._sendRequest(url, callback); });
};

Telefam.prototype.unpinChatMessage = function (squad, callback) {
	var callback = callback || function (error, res) { return ((error) ? error : res); }
	var url = this.url + "unpinChatMessage?chat_id=" + squad.chat_id;

	return this._sendRequest(url, callback);
};

// End - Changes : June 30, 2017

module.exports = Telefam;