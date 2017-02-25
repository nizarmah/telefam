<h1><a id="user-content-telefam" class="anchor" href="#telefam" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a id="user-content-Telefam_0"></a>Telefam</h1>
<p><em>A Telegram Bot API NodeJS Library to ease the use of it</em></p>
<h3><a id="user-content-creating-your-bot" class="anchor" href="#creating-your-bot" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a id="user-content-Creating_your_bot_3"></a>Creating your bot</h3>
<p>Creating your bot is simple. First thing you need to do is open Telegram and head to @BotFather. To start off, create the bot with it’s name.</p>
<pre><code>/newbot
</code></pre>
<p>When prompted for the name, enter the desired name of the bot. Then you must give it a username ending with <code>bot</code>. At last, save your bot <code>token</code> and make sure you don’t share it. Each bot is given a unique authentication token [when
	it is created][8]. The token looks something like <code>123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11</code>, but we’ll use simply <strong>&lt;token&gt;</strong> in this document instead. You can learn about obtaining tokens and generating new ones in [this
	document][9].
</p>
<h3><a id="user-content-installing-library" class="anchor" href="#installing-library" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a id="user-content-Installing_library_15"></a>Installing library</h3>
<p>This is a pretty simple step.</p>
<p>Yet, we're gonna need <a href="https://github.com/form-data/form-data">form-data</a> and <a href="https://github.com/request/request">request</a></p>
<pre><code>npm install request -save
npm install form-data -save
npm install https://github.com/nizarmah/telefam.git -save
</code></pre>
<blockquote>
	<p><strong>Note</strong><br>Move <code>telefam</code> to <code>node_modules</code><br>Every Method has a <code>callback(error, response)</code></p>
</blockquote>
<h3><a id="user-content-initializing-your-bot" class="anchor" href="#initializing-your-bot" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a id="user-content-Initializing_your_bot_22"></a>Initializing your bot</h3>
<p>Start off by setting up an Express NodeJS web server if you haven’t. Then initialize the Bot as follows. Remember the bot <code>token</code> you saved previously ? Well, we’ll be using that.</p>
<pre><code>var Telefam = require('telefam');
var Fam = new Telefam('&lt;token&gt;');
</code></pre>
<p>Now, similar to the [Telegram Bot API], all methods are available. Also, inline mode is too. Moreover, every method’s parameters are available for use in JSON form. However, some would be included in <code>options</code>. We’ll go over what is included
	as we discuss every method and the <code>options</code> for each.</p>
<h3><a id="user-content-getting-updates-1" class="anchor" href="#getting-updates-1" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getting-updates" href="#getting-updates" id="user-content-getting-updates"><i></i></a>Manual</h3>
<p>Well, the manual is pretty much almost accurate with the <a href="https://core.telegram.org/bots/api">Telegram Web API</a>. However there are some small changes in the way of entering stuff in. One of which is the <code>options</code> JSON Object for specific elements for specific methods.<br>Those exceptions are stated below with examples.</p>
<blockquote>
	<p><code>Options</code> parameters are optional parameters but should be included under <code>options</code> when passing JSON Object.</p>
</blockquote>
<h4><a id="user-content-getupdates" class="anchor" href="#getupdates" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getupdates" href="#getupdates" id="user-content-getupdates"><i></i></a>getUpdates</h4>
<p>Use this method to receive incoming updates using long polling (<a href="http://en.wikipedia.org/wiki/Push_technology#Long_polling">wiki</a>). An Array of <a href="#update">Update</a> objects is returned.</p>
<table class="table">
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>offset</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>limit</td>
			<td><code>Options</code>Optional</td>
		</tr>
		<tr>
			<td>timeout</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>allowed_updates</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<blockquote>
	<p><strong>Notes</strong><br><strong>1.</strong> This method will not work if an outgoing webhook is set up.<br><strong>2.</strong> In order to avoid getting duplicate updates, recalculate <em>offset</em> after each server response.</p>
</blockquote>
<p>The parameters would look something like this.</p>
<pre><code>Fam.getUpdates({
	options: {
		offset: 1,
		limit: 10,
		timeout: 5000
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<p>For polling, the bot would get updates in this manner ( from <a href="examples/getUpdates.js">getUpdates.js</a> )</p>
<pre><code>var lastUpdateId = 0;
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
</code></pre>
<h4><a id="user-content-inputfile" class="anchor" href="#inputfile" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inputfile" href="#inputfile" id="user-content-inputfile"><i></i></a>InputFile</h4>
<p>This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. </p>
<blockquote>
	<p><strong>Note</strong><br>You can only upload local files and not remote ones.<br>One file at a time, sadly.</p>
</blockquote>
<p>This is how uploading an input file looks like.</p>
<pre><code>/*
* path for local files
* url for online files (HTTP)
*/
file_type: {
	path: "the/path/to/file.extension"
	url: "http://linkhere.com/file.extension"
}
</code></pre>
<p>If the file_type isn't an object but a String; consequently, it searches for the <strong>file_id</strong> that's supposed to be in the bot files and sends it, instead of uploading it.</p>
<p>For an example, check <a href="examples/sendPhoto.js">sendPhoto.js</a></p>
<h4><a id="user-content-sendmessage" class="anchor" href="#sendmessage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendmessage" href="#sendmessage" id="user-content-sendmessage"><i></i></a>sendMessage</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>text</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>parse_mode</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>disable_web_page_preview</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
			<td><code>Options</code> Optional</td>
			<td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
				to hide reply keyboard or to force a reply from the user.</td>
		</tr>
	</tbody>
</table>
<h4><a id="user-content-formatting-options" class="anchor" href="#formatting-options" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-formatting-options" href="#formatting-options" id="user-content-formatting-options"><i></i></a>Formatting options</h4>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendMessage({
	chat_id: 3489324, /* chat message being sent to */
	text: "More _Random_ Stuff from https://nizarmah.me/",
	options: {
		parse_mode: "Markdown",
		disable_notification: false,
		disable_web_page_preview: false,
		reply_to_message_id: 32, /* message that's being replied to */,
		reply_markup: {
			force_reply: true
		}
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-forwardmessage" class="anchor" href="#forwardmessage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-forwardmessage" href="#forwardmessage" id="user-content-forwardmessage"><i></i></a>forwardMessage</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>from_chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>message_id</td>
			<td>Yes</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.forwardMessage({
	chat_id: 2348972, /* chat_id message being forwarded to */
	from_chat_id: 3289718, /* chat_id message being forwarded from */
	message_id: 134, /* id of message being forwarded */
	options: {
		disable_notifcation: true
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-sendphoto" class="anchor" href="#sendphoto" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendphoto" href="#sendphoto" id="user-content-sendphoto"><i></i></a>sendPhoto</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>photo</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>caption</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendPhoto({
	chat_id: 32428324,
	photo: "something.png",
	caption: "Photo of Something",
	options: {
		disable_notification: true,
		reply_to_message_id: 34,
		reply_markup: {
			force_reply: true
		}
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-sendaudio" class="anchor" href="#sendaudio" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendaudio" href="#sendaudio" id="user-content-sendaudio"><i></i></a>sendAudio</h4>
<p>For sending voice messages, use the <a href="#sendvoice">sendVoice</a> method instead.</p>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>audio</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>caption</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>title</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>performer</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>duration</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendAudio({
	chat_id: 32428324,
	audio: "audio.mp3",
	title: "My heavenly voice",
	performer: "Typical Me",
	duration: 35800,
	options: {
		disable_notification: false,
		reply_to_message_id: 16,
		reply_markup: {
			force_reply: true
		}
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-senddocument" class="anchor" href="#senddocument" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-senddocument" href="#senddocument" id="user-content-senddocument"><i></i></a>sendDocument</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>document</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>caption</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendDocument({
	chat_id: 32428324,
	document: "resume.pdf",
	caption: "My Resume",
	options: {
		disable_notification: true,
		reply_to_message_id: 34,
		reply_markup: {
			force_reply: true
		}
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-sendsticker" class="anchor" href="#sendsticker" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendsticker" href="#sendsticker" id="user-content-sendsticker"><i></i></a>sendSticker</h4>
<p>Use this method to send .webp stickers. On success, the sent <a href="#message">Message</a> is returned.</p>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>sticker</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<blockquote>
	<p>To get existing sticker file_ids, send them to the bot, and check the <a href="#getupdates">getUpdates</a>; consequently, file_id.</p>
</blockquote>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendSticker({
	chat_id: 32428324,
	sticker: "", /* at this time i was still collecting some sticker file_ids */
	options: {
		disable_notification: true,
		reply_to_message_id: 34,
		reply_markup: {
			force_reply: true
		}
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-sendvideo" class="anchor" href="#sendvideo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendvideo" href="#sendvideo" id="user-content-sendvideo"><i></i></a>sendVideo</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>video</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>duration</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>width</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>height</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>caption</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendVideo({
	chat_id: 32428324,
	video: "mytwerk.mp4",
	caption: "My Twerk",
	width: 800,
	height: 600,
	duration: 50000,
	options: {
		disable_notification: true,
		reply_to_message_id: 34,
		reply_markup: {
			force_reply: true
		}
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-sendvoice" class="anchor" href="#sendvoice" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendvoice" href="#sendvoice" id="user-content-sendvoice"><i></i></a>sendVoice</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>voice</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>caption</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>duration</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like the one for <a href="#sendAudio">sendAudio</a>.</p>
<h4><a id="user-content-sendlocation" class="anchor" href="#sendlocation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendlocation" href="#sendlocation" id="user-content-sendlocation"><i></i></a>sendLocation</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>latitude</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>longitude</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendLocation({
	chat_id: 32428324,
	latitude: 32,
	longitude: 150,
	options: {
		disable_notification: true,
		reply_to_message_id: 34,
		reply_markup: {
			force_reply: true
		}
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-sendvenue" class="anchor" href="#sendvenue" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendvenue" href="#sendvenue" id="user-content-sendvenue"><i></i></a>sendVenue</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>latitude</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>longitude</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>title</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>address</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>foursquare_id</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendVenue({
	chat_id: 32428324,
	latitude: 32,
	longitude: 150,
	title: "Hell",
	address: "Devil's Street, 52nd Avenue"
	foursquare_id: 2342,
	options: {
		disable_notification: true,
		reply_to_message_id: 34,
		reply_markup: {
			force_reply: true
		}
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-sendcontact" class="anchor" href="#sendcontact" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendcontact" href="#sendcontact" id="user-content-sendcontact"><i></i></a>sendContact</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>phone_number</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>first_name</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>last_name</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>disable_notification</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_to_message_id</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendContact({
	chat_id: @devilschannel,
	phone_number: "+96111111111,
	first_name: "Lucifer",
	options: {
		disable_notification: true,
		reply_to_message_id: 34,
		reply_markup: {
			force_reply: true
		}
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-sendchataction" class="anchor" href="#sendchataction" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendchataction" href="#sendchataction" id="user-content-sendchataction"><i></i></a>sendChatAction</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>action</td>
			<td>Yes</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.sendChatAction({
	chat_id: @devilssupergroup,
	action: "typing"
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-getuserprofilephotos" class="anchor" href="#getuserprofilephotos" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getuserprofilephotos" href="#getuserprofilephotos" id="user-content-getuserprofilephotos"><i></i></a>getUserProfilePhotos</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>user_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>offset</td>
			<td><code>Options</code> Optional</td>
		</tr>
		<tr>
			<td>limit</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>Fam.getUserProfilePhotos({
	user_id: 32428324,
	options: {
		offset: 10,
		limit: 10
	}
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-answercallbackquery" class="anchor" href="#answercallbackquery" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-answercallbackquery" href="#answercallbackquery" id="user-content-answercallbackquery"><i></i></a>answerCallbackQuery</h4>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>callback_query_id</td>
			<td>Yes</td>
		</tr>
		<tr>
			<td>text</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>show_alert</td>
			<td>Optional</td>
		</tr>
	</tbody>
</table>
<p>The parameters would look something like this.</p>
<pre><code>Fam.answerCallbackQuery({
	callback_query_id: 1348134234232,
	text: "Received Query Fam",
	show_alert: false /* test out the false and true, they are nice to check out */
}, function (error, res) {
	if (error) throw error;

	if (!res.ok) return console.log(res);
	// treat res here. 
});
</code></pre>
<h4><a id="user-content-editmessagecaption" class="anchor" href="#editmessagecaption" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-editmessagecaption" href="#editmessagecaption" id="user-content-editmessagecaption"><i></i></a>editMessageCaption</h4>
<p>Use this method to edit captions of messages sent by the bot or via the bot (for <a href="#inline-mode">inline bots</a>). On success, if edited message is sent by the bot, the edited <a href="#message">Message</a> is returned, otherwise <em>True</em>   is returned.</p>
<table>
	<tbody>
		<tr>
			<td><strong>Parameters</strong></td>
			<td><strong>Required</strong></td>
		</tr>
		<tr>
			<td>chat_id</td>
			<td>No</td>
		</tr>
		<tr>
			<td>message_id</td>
			<td>No</td>
		</tr>
		<tr>
			<td>inline_message_id</td>
			<td>No</td>
		</tr>
		<tr>
			<td>caption</td>
			<td>Optional</td>
		</tr>
		<tr>
			<td>reply_markup</td>
			<td><code>Options</code> Optional</td>
		</tr>
	</tbody>
</table>