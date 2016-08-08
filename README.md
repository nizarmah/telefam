<h1><a id="user-content-telefam" class="anchor" href="#telefam" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a id="user-content-Telefam_0"></a>Telefam</h1>
<p><em>A Telegram Bot API NodeJS Library to ease the use of it</em></p>
<p><br>
    <a href="#creating-your-bot">Creating your bot</a><br>
    <a href="#installing-library">Installing library</a><br>
    <a href="#initializing-bot">Initializing bot</a><br>
    <a href="#getting-updates">Getting updates</a><br>
    <a href="#getupdates">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getUpdates</a><br>
    <a href="#update">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update</a><br>
    <a href="#setwebhook">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setWebhook</a><br>
    <a href="#available-types">Available types</a><br>
    <a href="#user">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User</a><br>
    <a href="#chat">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chat</a><br>
    <a href="#message">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Message</a><br>
    <a href="#messageentity">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MessageEntity</a><br>
    <a href="#photosize">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhotoSize</a><br>
    <a href="#audio">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audio</a><br>
    <a href="#document">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Document</a><br>
    <a href="#sticker">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sticker</a><br>
    <a href="#video">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Video</a><br>
    <a href="#voice">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Voice</a><br>
    <a href="#contact">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact</a><br>
    <a href="#location">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location</a><br>
    <a href="#venue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Venue</a><br>
    <a href="#userProfilePhotos">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UserProfilePhotos</a><br>
    <a href="#file">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;File</a><br>
    <a href="#replykeyboardmarkup">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReplyKeyboardMarkup</a><br>
    <a href="#keyboardbutton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KeyboardButton</a><br>
    <a href="#replykeyboardhide">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReplyKeyboardHide</a><br>
    <a href="#inlinekeyboardmarkup">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineKeyboardMarkup</a><br>
    <a href="#inlinekeyboardbutton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineKeyboardButton</a><br>
    <a href="#callbackquery">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CallbackQuery</a><br>
    <a href="#forcereply">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ForceReply</a><br>
    <a href="#chatmember">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChatMember</a><br>
    <a href="#inputfile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InputFile</a><br>
    <a href="#inline-mode-objects">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inline mode objects</a><br>
    <a href="#available-types">Available methods</a><br>
    <a href="#getme">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getMe</a><br>
    <a href="#sendmessage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendMessage</a><br>
    <a href="#formatting-options">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Formatting options</a><br>
    <a href="#forwardmessage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;forwardMessage</a><br>
    <a href="#sendphoto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendPhoto</a><br>
    <a href="#sendaudio">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendAudio</a><br>
    <a href="#senddocument">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendDocument</a><br>
    <a href="#sendsticker">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendSticker</a><br>
    <a href="#sendvideo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendVideo</a><br>
    <a href="#sendvoice">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendVoice</a><br>
    <a href="#sendcontact">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendContact</a><br>
    <a href="#sendlocation">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendLocation</a><br>
    <a href="#sendvenue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sendVenue</a><br>
    <a href="#getuserProfilePhotos">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getUserProfilePhotos</a><br>
    <a href="#getfile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getFile</a><br>
    <a href="#kickChatMember">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kickChatMember</a><br>
    <a href="#leavechat">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;leaveChat</a><br>
    <a href="#unbanchatmember">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unbanChatMember</a><br>
    <a href="#getchat">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getChat</a><br>
    <a href="#getchatadministrators">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getChatAdministrators</a><br>
    <a href="#getchatmemberscount">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getChatMembersCount</a><br>
    <a href="#getchatmember">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getChatMember</a><br>
    <a href="#answercallbackquery">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answerCallbackQuery</a><br>
    <a href="#inline-mode-methods">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inline mode methods</a><br>
    <a href="#available-types">Updating messages</a><br>
    <a href="#editmessagetext">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editMessageText</a><br>
    <a href="#editmessagecaption">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editMessageCaption</a><br>
    <a href="#editmessagereplymarkup">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editMessageReplyMarkup</a><br>
    <a href="#inline-mode">Inline mode</a><br>
    <a href="#inlinequery">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQuery</a><br>
    <a href="#answerinlinequery">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answerInlineQuery</a><br>
    <a href="#inlinequeryresult">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResult</a><br>
    <a href="#inlinequeryresultarticle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultArticle</a><br>
    <a href="#inlinequeryresultphoto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultPhoto</a><br>
    <a href="#inlinequeryresultgif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultGif</a><br>
    <a href="#inlinequeryresultmpeg4gif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultMpeg4Gif</a><br>
    <a href="#inlinequeryresultvideo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultVideo</a><br>
    <a href="#inlinequeryresultaudio">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultAudio</a><br>
    <a href="#inlinequeryresultvoice">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultVoice</a><br>
    <a href="#inlinequeryresultdocument">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultDocument</a><br>
    <a href="#inlinequeryresultlocation">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultLocation</a><br>
    <a href="#inlinequeryresultvenue">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultVenue</a><br>
    <a href="#inlinequeryresultcontact">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultContact</a><br>
    <a href="#inlinequeryresultcachedphoto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultCachedPhoto</a><br>
    <a href="#inlinequeryresultcachedgif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultCachedGif</a><br>
    <a href="#inlinequeryresultcachedmpeg4gif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultCachedMpeg4Gif</a><br>
    <a href="#inlinequeryresultcachedsticker">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultCachedSticker</a><br>
    <a href="#inlinequeryresultcacheddocument">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultCachedDocument</a><br>
    <a href="#inlinequeryresultcachedvideo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultCachedVideo</a><br>
    <a href="#inlinequeryresultcachedvoice">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultCachedVoice</a><br>
    <a href="#inlinequeryresultcachedaudio">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InlineQueryResultCachedAudio</a><br>
    <a href="#inputmessagecontent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InputMessageContent</a><br>
    <a href="#inputtextmessagecontent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InputTextMessageContent</a><br>
    <a href="#inputlocationmessagecontent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InputLocationMessageContent</a><br>
    <a href="#inputvenuemessagecontent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InputVenueMessageContent</a><br>
    <a href="#inputcontactmessagecontent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InputContactMessageContent</a><br>
    <a href="#choseninlineresult">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChosenInlineResult</a><br>
    <br>
</p>
<h3><a id="user-content-creating-your-bot" class="anchor" href="#creating-your-bot" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a id="user-content-Creating_your_bot_3"></a>Creating your bot</h3>
<p>Creating your bot is simple. First thing you need to do is open Telegram and head to @BotFather. To start off, create the bot with it’s name.</p>
<pre><code>
/newbot
</code></pre>
<p>When prompted for the name, enter the desired name of the bot. Then you must give it a username ending with <code>bot</code>. At last, save your bot <code>token</code> and make sure you don’t share it. Each bot is given a unique authentication token [when
  it is created][8]. The token looks something like <code>123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11</code>, but we’ll use simply <strong>&lt;token&gt;</strong> in this document instead. You can learn about obtaining tokens and generating new ones in [this
  document][9].
</p>
<h3><a id="user-content-installing-library" class="anchor" href="#installing-library" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a id="user-content-Installing_library_15"></a>Installing library</h3>
<p>This is a pretty simple step.</p>
<p>Yet, we're gonna need <a href="https://github.com/form-data/form-data">form-data</a> and <a href="https://github.com/request/request">request</a></p>
<pre><code>
npm install request -save
npm install form-data -save
npm install https://github.com/nizarmah/telefam.git -save
</code></pre>
<blockquote><p><strong>Note</strong><br>Move <code>telefam</code> to <code>node_modules</code><br>Every Method has a <code>callback(error, response)</code></p></blockquote>
<h3><a id="user-content-initializing-your-bot" class="anchor" href="#initializing-your-bot" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a id="user-content-Initializing_your_bot_22"></a>Initializing your bot</h3>
<p>Start off by setting up an Express NodeJS web server if you haven’t. Then initialize the Bot as follows. Remember the bot <code>token</code> you saved previously ? Well, we’ll be using that.</p>
<pre><code>
var Telefam = require('telefam');
var Fam = new Telefam('&lt;token&gt;');
</code></pre>
<p>Now, similar to the [Telegram Bot API], all methods are available. Also, inline mode is too. Moreover, every method’s parameters are available for use in JSON form. However, some would be included in <code>options</code>. We’ll go over what is included
  as we discuss every method and the <code>options</code> for each.</p>
<h3><a id="user-content-getting-updates-1" class="anchor" href="#getting-updates-1" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getting-updates" href="#getting-updates" id="user-content-getting-updates"><i></i></a>Getting updates</h3>
<p>There are two mutually exclusive ways of receiving updates for your bot — the <a href="#getupdates">getUpdates</a> method on one hand and <a href="#setwebhook">Webhooks</a> on the other. Incoming updates are stored on the server until the bot receives
  them either way, but they will not be kept longer than 24 hours.</p>
<p>Regardless of which option you choose, you will receive JSON-serialized <a href="#update">Update</a> objects as a result.</p>
<blockquote>
  <p><code>Options</code> parameters are optional parameters but should be included under <code>options</code> when passing JSON Object.</p>
</blockquote>
<h4><a id="user-content-update-1" class="anchor" href="#update-1" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="#update"><i></i></a>Update</h4>
<p>This <a href="#available-types">object</a> represents an incoming update.<br>Only <strong>one</strong> of the optional parameters can be present in any given update.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>update_id</td>
      <td>Integer</td>
      <td>The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you’re using <a href="#setwebhook">Webhooks</a>, since it allows you to ignore repeated updates
        or to restore the correct update sequence, should they get out of order.</td>
    </tr>
    <tr>
      <td>message</td>
      <td><a href="#message">Message</a></td>
      <td><em>Optional</em>. New incoming message of any kind — text, photo, sticker, etc.</td>
    </tr>
    <tr>
      <td>edited_message</td>
      <td><a href="#message">Message</a></td>
      <td><em>Optional</em>. New version of a message that is known to the bot and was edited</td>
    </tr>
    <tr>
      <td>inline_query</td>
      <td><a href="#inlinequery">InlineQuery</a></td>
      <td><em>Optional</em>. New incoming <a href="#inline-mode">inline</a> query</td>
    </tr>
    <tr>
      <td>chosen_inline_result</td>
      <td><a href="#choseninlineresult">ChosenInlineResult</a></td>
      <td><em>Optional</em>. The result of an <a href="#inline-mode">inline</a> query that was chosen by a user and sent to their chat partner.</td>
    </tr>
    <tr>
      <td>callback_query</td>
      <td><a href="#callbackquery">CallbackQuery</a></td>
      <td><em>Optional</em>. New incoming callback query</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-getupdates" class="anchor" href="#getupdates" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getupdates" href="#getupdates" id="user-content-getupdates"><i></i></a>getUpdates</h4>
<p>Use this method to receive incoming updates using long polling (<a href="http://en.wikipedia.org/wiki/Push_technology#Long_polling">wiki</a>). An Array of <a href="#update">Update</a> objects is returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>offset</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered
        confirmed as soon as <a href="#getupdates">getUpdates</a> is called with an <em>offset</em> higher than its <em>update_id</em>. The negative offset can be specified to retrieve updates starting from <em>-offset</em> update from the end of the
        updates queue. All previous updates will forgotten.</td>
    </tr>
    <tr>
      <td>limit</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100.</td>
    </tr>
    <tr>
      <td>timeout</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling</td>
    </tr>
  </tbody>
</table>
<blockquote>
  <p><strong>Notes</strong><br><strong>1.</strong> This method will not work if an outgoing webhook is set up.<br><strong>2.</strong> In order to avoid getting duplicate updates, recalculate <em>offset</em> after each server response.</p>
</blockquote>
<p>The parameters would look something like this.</p>
<pre><code>
Fam.getUpdates({
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
<pre><code>
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
</code></pre>
<h4><a id="user-content-setwebhook" class="anchor" href="#setwebhook" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-setwebhook" href="#setwebhook" id="user-content-setwebhook"><i></i></a>setWebhook</h4>
<p>Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized <a href="#update">Update</a>. In case
  of an unsuccessful request, we will give up after a reasonable amount of attempts.</p>
<p>If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. <code>https://www.example.com/&lt;token&gt;</code>. Since nobody else knows your bot‘s token, you can be pretty sure it’s us.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>url</td>
      <td>String</td>
      <td>Optional</td>
      <td>HTTPS url to send updates to. Use an empty string to remove webhook integration</td>
    </tr>
    <tr>
      <td>certificate</td>
      <td><a href="#inputfile">InputFile</a></td>
      <td>Optional</td>
      <td>Upload your public key certificate so that the root certificate in use can be checked. See our <a href="/nizarmah/Telefam/blob/master/bots/self-signed">self-signed guide</a> for details.</td>
    </tr>
  </tbody>
</table>
<blockquote>
  <p><strong>Notes</strong><br><strong>1.</strong> You will not be able to receive updates using <a href="#getupdates">getUpdates</a> for as long as an outgoing webhook is set up.<br><strong>2.</strong> To use a self-signed certificate, you need to upload
    your <a href="/nizarmah/Telefam/blob/master/bots/self-signed">public key certificate</a> using <em>certificate</em> parameter. Please upload as InputFile, sending a String will not work.<br><strong>3.</strong> Ports currently supported <em>for Webhooks</em>:
    <strong>443, 80, 88, 8443</strong>.</p>
</blockquote>
<h3><a id="user-content-available-types" class="anchor" href="#available-types" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-available-types" href="#available-types" id="user-content-available-types"><i></i></a>Available types</h3>
<p>All types used in the Bot API responses are represented as JSON-objects.</p>
<p>It is safe to use 32-bit signed integers for storing all <strong>Integer</strong> fields unless otherwise noted.</p>
<blockquote>
  <p><strong>Optional</strong> fields may be not returned when irrelevant.</p>
</blockquote>
<h4><a id="user-content-user" class="anchor" href="#user" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-user" href="#user" id="user-content-user"><i></i></a>User</h4>
<p>This object represents a Telegram user or bot.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>id</td>
      <td>Integer</td>
      <td>Unique identifier for this user or bot</td>
    </tr>
    <tr>
      <td>first_name</td>
      <td>String</td>
      <td>User‘s or bot’s first name</td>
    </tr>
    <tr>
      <td>last_name</td>
      <td>String</td>
      <td><em>Optional</em>. User‘s or bot’s last name</td>
    </tr>
    <tr>
      <td>username</td>
      <td>String</td>
      <td><em>Optional</em>. User‘s or bot’s username</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-chat" class="anchor" href="#chat" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-chat" href="#chat" id="user-content-chat"><i></i></a>Chat</h4>
<p>This object represents a chat.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>id</td>
      <td>Integer</td>
      <td>Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it smaller than 52 bits, so a signed 64 bit integer or double-precision float type
        are safe for storing this identifier.</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of chat, can be either “private”, “group”, “supergroup” or “channel”</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td><em>Optional</em>. Title, for channels and group chats</td>
    </tr>
    <tr>
      <td>username</td>
      <td>String</td>
      <td><em>Optional</em>. Username, for private chats, supergroups and channels if available</td>
    </tr>
    <tr>
      <td>first_name</td>
      <td>String</td>
      <td><em>Optional</em>. First name of the other party in a private chat</td>
    </tr>
    <tr>
      <td>last_name</td>
      <td>String</td>
      <td><em>Optional</em>. Last name of the other party in a private chat</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-message" class="anchor" href="#message" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-message" href="#message" id="user-content-message"><i></i></a>Message</h4>
<p>This object represents a message.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>message_id</td>
      <td>Integer</td>
      <td>Unique message identifier</td>
    </tr>
    <tr>
      <td>from</td>
      <td><a href="#user">User</a></td>
      <td><em>Optional</em>. Sender, can be empty for messages sent to channels</td>
    </tr>
    <tr>
      <td>date</td>
      <td>Integer</td>
      <td>Date the message was sent in Unix time</td>
    </tr>
    <tr>
      <td>chat</td>
      <td><a href="#chat">Chat</a></td>
      <td>Conversation the message belongs to</td>
    </tr>
    <tr>
      <td>forward_from</td>
      <td><a href="#user">User</a></td>
      <td><em>Optional</em>. For forwarded messages, sender of the original message</td>
    </tr>
    <tr>
      <td>forward_from_chat</td>
      <td><a href="#chat">Chat</a></td>
      <td><em>Optional</em>. For messages forwarded from a channel, information about the original channel</td>
    </tr>
    <tr>
      <td>forward_date</td>
      <td>Integer</td>
      <td><em>Optional</em>. For forwarded messages, date the original message was sent in Unix time</td>
    </tr>
    <tr>
      <td>reply_to_message</td>
      <td><a href="#message">Message</a></td>
      <td><em>Optional</em>. For replies, the original message. Note that the Message object in this field will not contain further <em>reply_to_message</em> fields even if it itself is a reply.</td>
    </tr>
    <tr>
      <td>edit_date</td>
      <td>Integer</td>
      <td><em>Optional</em>. Date the message was last edited in Unix time</td>
    </tr>
    <tr>
      <td>text</td>
      <td>String</td>
      <td><em>Optional</em>. For text messages, the actual UTF-8 text of the message, 0-4096 characters.</td>
    </tr>
    <tr>
      <td>entities</td>
      <td>Array of <a href="#messageentity">MessageEntity</a></td>
      <td><em>Optional</em>. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text</td>
    </tr>
    <tr>
      <td>audio</td>
      <td><a href="#audio">Audio</a></td>
      <td><em>Optional</em>. Message is an audio file, information about the file</td>
    </tr>
    <tr>
      <td>document</td>
      <td><a href="#document">Document</a></td>
      <td><em>Optional</em>. Message is a general file, information about the file</td>
    </tr>
    <tr>
      <td>photo</td>
      <td>Array of <a href="#photosize">PhotoSize</a></td>
      <td><em>Optional</em>. Message is a photo, available sizes of the photo</td>
    </tr>
    <tr>
      <td>sticker</td>
      <td><a href="#sticker">Sticker</a></td>
      <td><em>Optional</em>. Message is a sticker, information about the sticker</td>
    </tr>
    <tr>
      <td>video</td>
      <td><a href="#video">Video</a></td>
      <td><em>Optional</em>. Message is a video, information about the video</td>
    </tr>
    <tr>
      <td>voice</td>
      <td><a href="#voice">Voice</a></td>
      <td><em>Optional</em>. Message is a voice message, information about the file</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption for the document, photo or video, 0-200 characters</td>
    </tr>
    <tr>
      <td>contact</td>
      <td><a href="#contact">Contact</a></td>
      <td><em>Optional</em>. Message is a shared contact, information about the contact</td>
    </tr>
    <tr>
      <td>location</td>
      <td><a href="#location">Location</a></td>
      <td><em>Optional</em>. Message is a shared location, information about the location</td>
    </tr>
    <tr>
      <td>venue</td>
      <td><a href="#venue">Venue</a></td>
      <td><em>Optional</em>. Message is a venue, information about the venue</td>
    </tr>
    <tr>
      <td>new_chat_member</td>
      <td><a href="#user">User</a></td>
      <td><em>Optional</em>. A new member was added to the group, information about them (this member may be the bot itself)</td>
    </tr>
    <tr>
      <td>left_chat_member</td>
      <td><a href="#user">User</a></td>
      <td><em>Optional</em>. A member was removed from the group, information about them (this member may be the bot itself)</td>
    </tr>
    <tr>
      <td>new_chat_title</td>
      <td>String</td>
      <td><em>Optional</em>. A chat title was changed to this value</td>
    </tr>
    <tr>
      <td>new_chat_photo</td>
      <td>Array of <a href="#photosize">PhotoSize</a></td>
      <td><em>Optional</em>. A chat photo was change to this value</td>
    </tr>
    <tr>
      <td>delete_chat_photo</td>
      <td>True</td>
      <td><em>Optional</em>. Service message: the chat photo was deleted</td>
    </tr>
    <tr>
      <td>group_chat_created</td>
      <td>True</td>
      <td><em>Optional</em>. Service message: the group has been created</td>
    </tr>
    <tr>
      <td>supergroup_chat_created</td>
      <td>True</td>
      <td><em>Optional</em>. Service message: the supergroup has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to_message if
        someone replies to a very first message in a directly created supergroup.</td>
    </tr>
    <tr>
      <td>channel_chat_created</td>
      <td>True</td>
      <td><em>Optional</em>. Service message: the channel has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if someone
        replies to a very first message in a channel.</td>
    </tr>
    <tr>
      <td>migrate_to_chat_id</td>
      <td>Integer</td>
      <td><em>Optional</em>. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it smaller than 52 bits,
        so a signed 64 bit integer or double-precision float type are safe for storing this identifier.</td>
    </tr>
    <tr>
      <td>migrate_from_chat_id</td>
      <td>Integer</td>
      <td><em>Optional</em>. The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it smaller than 52
        bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.</td>
    </tr>
    <tr>
      <td>pinned_message</td>
      <td><a href="#message">Message</a></td>
      <td><em>Optional</em>. Specified message was pinned. Note that the Message object in this field will not contain further <em>reply_to_message</em> fields even if it is itself a reply.</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-messageentity" class="anchor" href="#messageentity" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-messageentity" href="#messageentity" id="user-content-messageentity"><i></i></a>MessageEntity</h4>
<p>This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. </p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the entity. Can be <em>mention</em> (<code>@username</code>), <em>hashtag</em>, <em>bot_command</em>, <em>url</em>, <em>email</em>, <em>bold</em> (bold text), <em>italic</em> (italic text), <em>code</em> (monowidth string), <em>pre</em>        (monowidth block), <em>text_link</em> (for clickable text URLs), <em>text_mention</em> (for users <a href="https://telegram.org/blog/edit#new-mentions">without usernames</a>)</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>Integer</td>
      <td>Offset in UTF-16 code units to the start of the entity</td>
    </tr>
    <tr>
      <td>length</td>
      <td>Integer</td>
      <td>Length of the entity in UTF-16 code units</td>
    </tr>
    <tr>
      <td>url</td>
      <td>String</td>
      <td><em>Optional</em>. For “text_link” only, url that will be opened after user taps on the text</td>
    </tr>
    <tr>
      <td>user</td>
      <td><a href="#user">User</a></td>
      <td><em>Optional</em>. For “text_mention” only, the mentioned user</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-photosize" class="anchor" href="#photosize" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-photosize" href="#photosize" id="user-content-photosize"><i></i></a>PhotoSize</h4>
<p>This object represents one size of a photo or a <a href="#document">file</a> / <a href="#sticker">sticker</a> thumbnail.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>file_id</td>
      <td>String</td>
      <td>Unique identifier for this file</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Integer</td>
      <td>Photo width</td>
    </tr>
    <tr>
      <td>height</td>
      <td>Integer</td>
      <td>Photo height</td>
    </tr>
    <tr>
      <td>file_size</td>
      <td>Integer</td>
      <td><em>Optional</em>. File size</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-audio" class="anchor" href="#audio" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-audio" href="#audio" id="user-content-audio"><i></i></a>Audio</h4>
<p>This object represents an audio file to be treated as music by the Telegram clients.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>file_id</td>
      <td>String</td>
      <td>Unique identifier for this file</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>Integer</td>
      <td>Duration of the audio in seconds as defined by sender</td>
    </tr>
    <tr>
      <td>performer</td>
      <td>String</td>
      <td><em>Optional</em>. Performer of the audio as defined by sender or by audio tags</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td><em>Optional</em>. Title of the audio as defined by sender or by audio tags</td>
    </tr>
    <tr>
      <td>mime_type</td>
      <td>String</td>
      <td><em>Optional</em>. MIME type of the file as defined by sender</td>
    </tr>
    <tr>
      <td>file_size</td>
      <td>Integer</td>
      <td><em>Optional</em>. File size</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-document" class="anchor" href="#document" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-document" href="#document" id="user-content-document"><i></i></a>Document</h4>
<p>This object represents a general file (as opposed to <a href="#photosize">photos</a>, <a href="#voice">voice messages</a> and <a href="#audio">audio files</a>).</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>file_id</td>
      <td>String</td>
      <td>Unique file identifier</td>
    </tr>
    <tr>
      <td>thumb</td>
      <td><a href="#photosize">PhotoSize</a></td>
      <td><em>Optional</em>. Document thumbnail as defined by sender</td>
    </tr>
    <tr>
      <td>file_name</td>
      <td>String</td>
      <td><em>Optional</em>. Original filename as defined by sender</td>
    </tr>
    <tr>
      <td>mime_type</td>
      <td>String</td>
      <td><em>Optional</em>. MIME type of the file as defined by sender</td>
    </tr>
    <tr>
      <td>file_size</td>
      <td>Integer</td>
      <td><em>Optional</em>. File size</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-sticker" class="anchor" href="#sticker" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sticker" href="#sticker" id="user-content-sticker"><i></i></a>Sticker</h4>
<p>This object represents a sticker.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>file_id</td>
      <td>String</td>
      <td>Unique identifier for this file</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Integer</td>
      <td>Sticker width</td>
    </tr>
    <tr>
      <td>height</td>
      <td>Integer</td>
      <td>Sticker height</td>
    </tr>
    <tr>
      <td>thumb</td>
      <td><a href="#photosize">PhotoSize</a></td>
      <td><em>Optional</em>. Sticker thumbnail in .webp or .jpg format</td>
    </tr>
    <tr>
      <td>emoji</td>
      <td>String</td>
      <td><em>Optional</em>. Emoji associated with the sticker</td>
    </tr>
    <tr>
      <td>file_size</td>
      <td>Integer</td>
      <td><em>Optional</em>. File size</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-video" class="anchor" href="#video" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-video" href="#video" id="user-content-video"><i></i></a>Video</h4>
<p>This object represents a video file.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>file_id</td>
      <td>String</td>
      <td>Unique identifier for this file</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Integer</td>
      <td>Video width as defined by sender</td>
    </tr>
    <tr>
      <td>height</td>
      <td>Integer</td>
      <td>Video height as defined by sender</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>Integer</td>
      <td>Duration of the video in seconds as defined by sender</td>
    </tr>
    <tr>
      <td>thumb</td>
      <td><a href="#photosize">PhotoSize</a></td>
      <td><em>Optional</em>. Video thumbnail</td>
    </tr>
    <tr>
      <td>mime_type</td>
      <td>String</td>
      <td><em>Optional</em>. Mime type of a file as defined by sender</td>
    </tr>
    <tr>
      <td>file_size</td>
      <td>Integer</td>
      <td><em>Optional</em>. File size</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-voice" class="anchor" href="#voice" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-voice" href="#voice" id="user-content-voice"><i></i></a>Voice</h4>
<p>This object represents a voice note.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>file_id</td>
      <td>String</td>
      <td>Unique identifier for this file</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>Integer</td>
      <td>Duration of the audio in seconds as defined by sender</td>
    </tr>
    <tr>
      <td>mime_type</td>
      <td>String</td>
      <td><em>Optional</em>. MIME type of the file as defined by sender</td>
    </tr>
    <tr>
      <td>file_size</td>
      <td>Integer</td>
      <td><em>Optional</em>. File size</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-contact" class="anchor" href="#contact" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-contact" href="#contact" id="user-content-contact"><i></i></a>Contact</h4>
<p>This object represents a phone contact.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>phone_number</td>
      <td>String</td>
      <td>Contact's phone number</td>
    </tr>
    <tr>
      <td>first_name</td>
      <td>String</td>
      <td>Contact's first name</td>
    </tr>
    <tr>
      <td>last_name</td>
      <td>String</td>
      <td><em>Optional</em>. Contact's last name</td>
    </tr>
    <tr>
      <td>user_id</td>
      <td>Integer</td>
      <td><em>Optional</em>. Contact's user identifier in Telegram</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-location" class="anchor" href="#location" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-location" href="#location" id="user-content-location"><i></i></a>Location</h4>
<p>This object represents a point on the map.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>longitude</td>
      <td>Float</td>
      <td>Longitude as defined by sender</td>
    </tr>
    <tr>
      <td>latitude</td>
      <td>Float</td>
      <td>Latitude as defined by sender</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-venue" class="anchor" href="#venue" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-venue" href="#venue" id="user-content-venue"><i></i></a>Venue</h4>
<p>This object represents a venue.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>location</td>
      <td><a href="#location">Location</a></td>
      <td>Venue location</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Name of the venue</td>
    </tr>
    <tr>
      <td>address</td>
      <td>String</td>
      <td>Address of the venue</td>
    </tr>
    <tr>
      <td>foursquare_id</td>
      <td>String</td>
      <td><em>Optional</em>. Foursquare identifier of the venue</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-userprofilephotos" class="anchor" href="#userprofilephotos" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-userprofilephotos" href="#userprofilephotos" id="user-content-userprofilephotos"><i></i></a>UserProfilePhotos</h4>
<p>This object represent a user's profile pictures.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>total_count</td>
      <td>Integer</td>
      <td>Total number of profile pictures the target user has</td>
    </tr>
    <tr>
      <td>photos</td>
      <td>Array of Array of <a href="#photosize">PhotoSize</a></td>
      <td>Requested profile pictures (in up to 4 sizes each)</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-file" class="anchor" href="#file" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-file" href="#file" id="user-content-file"><i></i></a>File</h4>
<p>This object represents a file ready to be downloaded. The file can be downloaded via the link <code>https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt;</code>. It is guaranteed that the link will be valid for at least 1 hour. When the link
  expires, a new one can be requested by calling <a href="#getfile">getFile</a>.</p>
<blockquote>
  <p>Maximum file size to download is 20 MB</p>
</blockquote>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>file_id</td>
      <td>String</td>
      <td>Unique identifier for this file</td>
    </tr>
    <tr>
      <td>file_size</td>
      <td>Integer</td>
      <td><em>Optional</em>. File size, if known</td>
    </tr>
    <tr>
      <td>file_path</td>
      <td>String</td>
      <td><em>Optional</em>. File path. Use <code>https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt;</code> to get the file.</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-replykeyboardmarkup" class="anchor" href="#replykeyboardmarkup" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-replykeyboardmarkup" href="#replykeyboardmarkup" id="user-content-replykeyboardmarkup"><i></i></a>ReplyKeyboardMarkup</h4>
<p>This object represents a <a href="https://core.telegram.org/bots#keyboards">custom keyboard</a> with reply options (see <a href="https://core.telegram.org/bots#keyboards">Introduction to bots</a> for details and examples).</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>keyboard</td>
      <td>Array of Array of <a href="#keyboardbutton">KeyboardButton</a></td>
      <td>Array of button rows, each represented by an Array of <a href="#keyboardbutton">KeyboardButton</a> objects</td>
    </tr>
    <tr>
      <td>resize_keyboard</td>
      <td>Boolean</td>
      <td><em>Optional</em>. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to <em>false</em>, in which case the custom keyboard is always of the same height
        as the app's standard keyboard.</td>
    </tr>
    <tr>
      <td>one_time_keyboard</td>
      <td>Boolean</td>
      <td><em>Optional</em>. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input
        field to see the custom keyboard again. Defaults to <em>false</em>.</td>
    </tr>
    <tr>
      <td>selective</td>
      <td>Boolean</td>
      <td><em>Optional</em>. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the <em>text</em> of the <a href="#message">Message</a> object; 2) if the bot's message is a reply (has <em>reply_to_message_id</em>),
        sender of the original message.<br><br><em>Example:</em> A user requests to change the bot‘s language, bot replies to the request with a keyboard to select the new language. Other users in the group don’t see the keyboard.</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-keyboardbutton" class="anchor" href="#keyboardbutton" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-keyboardbutton" href="#keyboardbutton" id="user-content-keyboardbutton"><i></i></a>KeyboardButton</h4>
<p>This object represents one button of the reply keyboard. For simple text buttons <em>String</em> can be used instead of this object to specify text of the button. Optional fields are mutually exclusive.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>text</td>
      <td>String</td>
      <td>Text of the button. If none of the optional fields are used, it will be sent to the bot as a message when the button is pressed</td>
    </tr>
    <tr>
      <td>request_contact</td>
      <td>Boolean</td>
      <td><em>Optional</em>. If <em>True</em>, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only</td>
    </tr>
    <tr>
      <td>request_location</td>
      <td>Boolean</td>
      <td><em>Optional</em>. If <em>True</em>, the user's current location will be sent when the button is pressed. Available in private chats only</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> <em>request_contact</em> and <em>request_location</em> options will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>
<h4><a id="user-content-replykeyboardhide" class="anchor" href="#replykeyboardhide" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-replykeyboardhide" href="#replykeyboardhide" id="user-content-replykeyboardhide"><i></i></a>ReplyKeyboardHide</h4>
<p>Upon receiving a message with this object, Telegram clients will hide the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time
  keyboards that are hidden immediately after the user presses a button (see <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a>).</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>hide_keyboard</td>
      <td>True</td>
      <td>Requests clients to hide the custom keyboard</td>
    </tr>
    <tr>
      <td>selective</td>
      <td>Boolean</td>
      <td><em>Optional</em>. Use this parameter if you want to hide keyboard for specific users only. Targets: 1) users that are @mentioned in the <em>text</em> of the <a href="#message">Message</a> object; 2) if the bot's message is a reply (has <em>reply_to_message_id</em>),
        sender of the original message.<br><br><em>Example:</em> A user votes in a poll, bot returns confirmation message in reply to the vote and hides keyboard for that user, while still showing the keyboard with poll options to users who haven't voted
        yet.
      </td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-inlinekeyboardmarkup" class="anchor" href="#inlinekeyboardmarkup" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinekeyboardmarkup" href="#inlinekeyboardmarkup" id="user-content-inlinekeyboardmarkup"><i></i></a>InlineKeyboardMarkup</h4>
<p>This object represents an <a href="https://core.telegram.org/bots#inline-keyboards">inline keyboard</a> that appears right next to the message it belongs to.</p>
<blockquote>
  <p><strong>Warning:</strong> Inline keyboards are currently being tested and are not available in channels yet. For now, feel free to use them in <strong>one-on-one chats</strong> or <strong>groups</strong>.</p>
</blockquote>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>inline_keyboard</td>
      <td>Array of Array of <a href="#inlinekeyboardbutton">InlineKeyboardButton</a></td>
      <td>Array of button rows, each represented by an Array of <a href="#inlinekeyboardbutton">InlineKeyboardButton</a> objects</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will display <em>unsupported message</em>.</p>
<h4><a id="user-content-inlinekeyboardbutton" class="anchor" href="#inlinekeyboardbutton" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinekeyboardbutton" href="#inlinekeyboardbutton" id="user-content-inlinekeyboardbutton"><i></i></a>InlineKeyboardButton</h4>
<p>This object represents one button of an inline keyboard. You <strong>must</strong> use exactly one of the optional fields.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>text</td>
      <td>String</td>
      <td>Label text on the button</td>
    </tr>
    <tr>
      <td>url</td>
      <td>String</td>
      <td><em>Optional</em>. HTTP url to be opened when button is pressed</td>
    </tr>
    <tr>
      <td>callback_data</td>
      <td>String</td>
      <td><em>Optional</em>. Data to be sent in a <a href="#callbackquery">callback query</a> to the bot when button is pressed, 1-64 bytes</td>
    </tr>
    <tr>
      <td>switch_inline_query</td>
      <td>String</td>
      <td><em>Optional</em>. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username
        will be inserted.<br><br><strong>Note:</strong> This offers an easy way for users to start using your bot in <a href="/nizarmah/Telefam/blob/master/bots/inline">inline mode</a> when they are currently in a private chat with it. Especially useful
        when combined with <a href="#answerinlinequery"><em>switch_pm…</em></a> actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will display <em>unsupported message</em>.</p>
<h4><a id="user-content-callbackquery" class="anchor" href="#callbackquery" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-callbackquery" href="#callbackquery" id="user-content-callbackquery"><i></i></a>CallbackQuery</h4>
<p>This object represents an incoming callback query from a callback button in an <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>. If the button that originated the query was attached to a message
  sent by the bot, the field <em>message</em> will be presented. If the button was attached to a message sent via the bot (in <a href="#inline-mode">inline mode</a>), the field <em>inline_message_id</em> will be presented.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this query</td>
    </tr>
    <tr>
      <td>from</td>
      <td><a href="#user">User</a></td>
      <td>Sender</td>
    </tr>
    <tr>
      <td>message</td>
      <td><a href="#message">Message</a></td>
      <td><em>Optional</em>. Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old</td>
    </tr>
    <tr>
      <td>inline_message_id</td>
      <td>String</td>
      <td><em>Optional</em>. Identifier of the message sent via the bot in inline mode, that originated the query</td>
    </tr>
    <tr>
      <td>data</td>
      <td>String</td>
      <td>Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-forcereply" class="anchor" href="#forcereply" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-forcereply" href="#forcereply" id="user-content-forcereply"><i></i></a>ForceReply</h4>
<p>Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot‘s message and tapped ’Reply'). This can be extremely useful if you want to create user-friendly step-by-step
  interfaces without having to sacrifice <a href="/nizarmah/Telefam/blob/master/bots#privacy-mode">privacy mode</a>.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>force_reply</td>
      <td>True</td>
      <td>Shows reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply'</td>
    </tr>
    <tr>
      <td>selective</td>
      <td>Boolean</td>
      <td><em>Optional</em>. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the <em>text</em> of the <a href="#message">Message</a> object; 2) if the bot's message is a reply (has <em>reply_to_message_id</em>),
        sender of the original message.</td>
    </tr>
  </tbody>
</table>
<blockquote>
  <p><strong>Example:</strong> A <a href="https://telegram.me/PollBot">poll bot</a> for groups runs in privacy mode (only receives commands, replies to its messages and mentions). There could be two ways to create a new poll:</p>
</blockquote>
<ul>
  <li>Explain the user how to send a command with parameters (e.g. /newpoll question answer1 answer2). May be appealing for hardcore users but lacks modern day polish.</li>
  <li>Guide the user through a step-by-step process. ‘Please send me your question’, ‘Cool, now let’s add the first answer option‘, ’Great. Keep adding answer options, then send /done when you‘re ready’.</li>
</ul>
<p>The last option is definitely more attractive. And if you use <a href="#forcereply">ForceReply</a> in your bot‘s questions, it will receive the user’s answers even if it only receives replies, commands and mentions — without any extra work for the user.</p>
<h4><a id="user-content-chatmember" class="anchor" href="#chatmember" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-chatmember" href="#chatmember" id="user-content-chatmember"><i></i></a>ChatMember</h4>
<p>This object contains information about one member of the chat.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>user</td>
      <td><a href="#user">User</a></td>
      <td>Information about the user</td>
    </tr>
    <tr>
      <td>status</td>
      <td>String</td>
      <td>The member's status in the chat. Can be “creator”, “administrator”, “member”, “left” or “kicked”</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-inputfile" class="anchor" href="#inputfile" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inputfile" href="#inputfile" id="user-content-inputfile"><i></i></a>InputFile</h4>
<p>This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser. </p>
<blockquote><p><strong>Note</strong><br>You can only upload local files and not remote ones.<br>One file at a time, sadly.</p></blockquote>
<p>This is how uploading an input file looks like.</p>
<pre><code>
file_type: {
    path: "the/path/to/file.extension"
}
</code></pre>
<p>If the file_type isn't an object but a String; consequently, it searches for the <strong>file_id</strong> that's supposed to be in the bot files and sends it, instead of uploading it.</p><br>
<p>For an example, check <a href="examples/sendPhoto.js">sendPhoto.js</a></p>
<h5><a id="user-content-resending-files-without-reuploading" class="anchor" href="#resending-files-without-reuploading" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-resending-files-without-reuploading" href="#resending-files-without-reuploading"><i></i></a>Resending files without reuploading</h5>
<p>There are <strong>two ways</strong> of sending a file (photo, sticker, audio etc.). If it‘s a new file, you can upload it using multipart/form-data. If the file is already on our servers, you don’t need to reupload it: each file object has a <strong>file_id</strong>  field, you can simply pass this <strong>file_id</strong> as a parameter instead.</p>
<ul>
  <li>It is not possible to change the file type when resending by <strong>file_id</strong>. I.e. a <a href="#video">video</a> can't be <a href="#sendphoto">sent as a photo</a>, a <a href="#photosize">photo</a> can't be <a href="#senddocument">sent as a document</a>,
    etc.
  </li>
  <li>It is not possible to resend thumbnails.</li>
  <li>Resending a photo by <strong>file_id</strong> will send all of its <a href="#photosize">sizes</a>. </li>
  <li><strong>file_id</strong> can't be transferred from one bot to another. </li>
</ul>
<h4><a id="user-content-inline-mode-objects" class="anchor" href="#inline-mode-objects" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inline-mode-objects" href="#inline-mode-objects" id="user-content-inline-mode-objects"><i></i></a>Inline mode objects</h4>
<p>Objects and methods used in the inline mode are described in the <a href="#inline-mode">Inline mode section</a>.</p>
<h3><a id="user-content-available-methods" class="anchor" href="#available-methods" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-available-methods" href="#available-methods" id="user-content-available-methods"><i></i></a>Available methods</h3>
<blockquote>
  <p><code>Options</code> parameters are optional parameters but should be included under <code>options</code> when passing JSON Object.</p>
</blockquote>
<h4><a id="user-content-getme" class="anchor" href="#getme" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getme" href="#getme" id="user-content-getme"><i></i></a>getMe</h4>
<p>A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a <a href="#user">User</a> object.</p>
<h4><a id="user-content-sendmessage" class="anchor" href="#sendmessage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendmessage" href="#sendmessage" id="user-content-sendmessage"><i></i></a>sendMessage</h4>
<p>Use this method to send text messages. On success, the sent <a href="#message">Message</a> is returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>text</td>
      <td>String</td>
      <td>Yes</td>
      <td>Text of the message to be sent</td>
    </tr>
    <tr>
      <td>parse_mode</td>
      <td>String</td>
      <td>Options - Optional</td>
      <td>Send <a href="#markdown-style"><em>Markdown</em></a> or <a href="#html-style"><em>HTML</em></a>, if you want Telegram apps to show <a href="#formatting-options">bold, italic, fixed-width text or inline URLs</a> in your bot's message.</td>
    </tr>
    <tr>
      <td>disable_web_page_preview</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Disables link previews for links in this message</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide reply keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-formatting-options" class="anchor" href="#formatting-options" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-formatting-options" href="#formatting-options" id="user-content-formatting-options"><i></i></a>Formatting options</h4>
<p>The Bot API supports basic formatting for messages. You can use bold and italic text, as well as inline links and pre-formatted code in your bots' messages. Telegram clients will render them accordingly. You can use either markdown-style or HTML-style
  formatting.
</p>

<p>Note that Telegram clients will display an <strong>alert</strong> to the user before opening an inline link (‘Open this link?’ together with the full URL).</p>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendMessage({
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

<h6><a id="user-content-markdown-style" class="anchor" href="#markdown-style" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-markdown-style" href="#markdown-style"><i></i></a>Markdown style</h6>

<p>To use this mode, pass <em>Markdown</em> in the <em>parse_mode</em> field when using <a href="#sendmessage">sendMessage</a>. Use the following syntax in your message:</p>

<pre><code>*bold text*
_italic text_
[text](URL)
`inline fixed-width code`
```text
pre-formatted fixed-width code block
```</code></pre>

<h6><a id="user-content-html-style" class="anchor" href="#html-style" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-html-style" href="#html-style"><i></i></a>HTML style</h6>

<p>To use this mode, pass <em>HTML</em> in the <em>parse_mode</em> field when using <a href="#sendmessage">sendMessage</a>. The following tags are currently supported:</p>

<pre><code>&lt;b&gt;bold&lt;/b&gt;, &lt;strong&gt;bold&lt;/strong&gt;
&lt;i&gt;italic&lt;/i&gt;, &lt;em&gt;italic&lt;/em&gt;
&lt;a href="URL"&gt;inline URL&lt;/a&gt;
&lt;code&gt;inline fixed-width code&lt;/code&gt;
&lt;pre&gt;pre-formatted fixed-width code block&lt;/pre&gt;</code></pre>

<p>Please note:</p>

<ul>
  <li>Only the tags mentioned above are currently supported.</li>
  <li>Tags must not be nested.</li>
  <li>All <code>&lt;</code>, <code>&gt;</code> and <code>&amp;</code> symbols that are not a part of a tag or an HTML entity must be replaced with the corresponding HTML entities (<code>&lt;</code> with <code>&amp;lt;</code>, <code>&gt;</code> with <code>&amp;gt;</code>    and <code>&amp;</code> with <code>&amp;amp;</code>).</li>
  <li>All numerical HTML entities are supported.</li>
  <li>The API currently supports only the following named HTML entities: <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code> and <code>&amp;quot;</code>.</li>
</ul>

<h4><a id="user-content-forwardmessage" class="anchor" href="#forwardmessage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-forwardmessage" href="#forwardmessage" id="user-content-forwardmessage"><i></i></a>forwardMessage</h4>

<p>Use this method to forward messages of any kind. On success, the sent <a href="#message">Message</a> is returned.</p>

<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>from_chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the chat where the original message was sent (or channel username in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>message_id</td>
      <td>Integer</td>
      <td>Yes</td>
      <td>Unique message identifier</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.forwardMessage({
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

<p>Use this method to send photos. On success, the sent <a href="#message">Message</a> is returned.</p>

<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>photo</td>
      <td><a href="#inputfile">InputFile</a> or String</td>
      <td>Yes</td>
      <td>Photo to send. You can either pass a <em>file_id</em> as String to <a href="#resending-files-without-reuploading">resend</a> a photo that is already on the Telegram servers, or upload a new photo using multipart/form-data.</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td>Optional</td>
      <td>Photo caption (may also be used when resending photos by <em>file_id</em>), 0-200 characters</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide reply keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendPhoto({
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

<p>Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .mp3 format. On success, the sent <a href="#message">Message</a> is returned. Bots can currently send audio files of up to
  50 MB in size, this limit may be changed in the future.</p>
<p>For sending voice messages, use the <a href="#sendvoice">sendVoice</a> method instead.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>audio</td>
      <td><a href="#inputfile">InputFile</a> or String</td>
      <td>Yes</td>
      <td>Audio file to send. You can either pass a <em>file_id</em> as String to <a href="#resending-files-without-reuploading">resend</a> an audio that is already on the Telegram servers, or upload a new audio file using <strong>multipart/form-data</strong>.</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>Integer</td>
      <td>Optional</td>
      <td>Duration of the audio in seconds</td>
    </tr>
    <tr>
      <td>performer</td>
      <td>String</td>
      <td>Optional</td>
      <td>Performer</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Optional</td>
      <td>Track name</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide reply keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendAudio({
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
<p>Use this method to send general files. On success, the sent <a href="#message">Message</a> is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>document</td>
      <td><a href="#inputfile">InputFile</a> or String</td>
      <td>Yes</td>
      <td>File to send. You can either pass a <em>file_id</em> as String to <a href="#resending-files-without-reuploading">resend</a> a file that is already on the Telegram servers, or upload a new file using <strong>multipart/form-data</strong>.</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td>Optional</td>
      <td>Document caption (may also be used when resending documents by <em>file_id</em>), 0-200 characters</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide reply keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendDocument({
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
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>sticker</td>
      <td><a href="#inputfile">InputFile</a> or String</td>
      <td>Yes</td>
      <td>Sticker to send. You can either pass a <em>file_id</em> as String to <a href="#resending-files-without-reuploading">resend</a> a sticker that is already on the Telegram servers, or upload a new sticker using <strong>multipart/form-data</strong>.</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide reply keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>

<blockquote>
    <p>To get existing sticker file_ids, send them to the bot, and check the <a href="#getupdates">getUpdates</a>; consequently, file_id.</p>
</blockquote>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendSticker({
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
<p>Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as <a href="#document">Document</a>). On success, the sent <a href="#message">Message</a> is returned. Bots can currently send video files of up to 50
  MB in size, this limit may be changed in the future.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>video</td>
      <td><a href="#inputfile">InputFile</a> or String</td>
      <td>Yes</td>
      <td>Video to send. You can either pass a <em>file_id</em> as String to <a href="#resending-files-without-reuploading">resend</a> a video that is already on the Telegram servers, or upload a new video file using <strong>multipart/form-data</strong>.</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>Integer</td>
      <td>Optional</td>
      <td>Duration of sent video in seconds</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Integer</td>
      <td>Optional</td>
      <td>Video width</td>
    </tr>
    <tr>
      <td>height</td>
      <td>Integer</td>
      <td>Optional</td>
      <td>Video height</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td>Optional</td>
      <td>Video caption (may also be used when resending videos by <em>file_id</em>), 0-200 characters</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide reply keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendVideo({
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
<p>Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .ogg file encoded with OPUS (other formats may be sent as <a href="#audio">Audio</a> or <a href="#document">Document</a>).
  On success, the sent <a href="#message">Message</a> is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>voice</td>
      <td><a href="#inputfile">InputFile</a> or String</td>
      <td>Yes</td>
      <td>Audio file to send. You can either pass a <em>file_id</em> as String to <a href="#resending-files-without-reuploading">resend</a> an audio that is already on the Telegram servers, or upload a new audio file using <strong>multipart/form-data</strong>.</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>Integer</td>
      <td>Optional</td>
      <td>Duration of sent audio in seconds</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide reply keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like the one for <a href="#sendAudio">sendAudio</a>.</p>

<h4><a id="user-content-sendlocation" class="anchor" href="#sendlocation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-sendlocation" href="#sendlocation" id="user-content-sendlocation"><i></i></a>sendLocation</h4>
<p>Use this method to send point on the map. On success, the sent <a href="#message">Message</a> is returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>latitude</td>
      <td>Float number</td>
      <td>Yes</td>
      <td>Latitude of location</td>
    </tr>
    <tr>
      <td>longitude</td>
      <td>Float number</td>
      <td>Yes</td>
      <td>Longitude of location</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide reply keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendLocation({
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
<p>Use this method to send information about a venue. On success, the sent <a href="#message">Message</a> is returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>latitude</td>
      <td>Float number</td>
      <td>Yes</td>
      <td>Latitude of the venue</td>
    </tr>
    <tr>
      <td>longitude</td>
      <td>Float number</td>
      <td>Yes</td>
      <td>Longitude of the venue</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Yes</td>
      <td>Name of the venue</td>
    </tr>
    <tr>
      <td>address</td>
      <td>String</td>
      <td>Yes</td>
      <td>Address of the venue</td>
    </tr>
    <tr>
      <td>foursquare_id</td>
      <td>String</td>
      <td>Optional</td>
      <td>Foursquare identifier of the venue</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide reply keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendVenue({
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
<p>Use this method to send phone contacts. On success, the sent <a href="#message">Message</a> is returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>phone_number</td>
      <td>String</td>
      <td>Yes</td>
      <td>Contact's phone number</td>
    </tr>
    <tr>
      <td>first_name</td>
      <td>String</td>
      <td>Yes</td>
      <td>Contact's first name</td>
    </tr>
    <tr>
      <td>last_name</td>
      <td>String</td>
      <td>Optional</td>
      <td>Contact's last name</td>
    </tr>
    <tr>
      <td>disable_notification</td>
      <td>Boolean</td>
      <td>Options - Optional</td>
      <td>Sends the message <a href="https://telegram.org/blog/channels-2-0#silent-messages">silently</a>. iOS users will not receive a notification, Android users will receive a notification with no sound.</td>
    </tr>
    <tr>
      <td>reply_to_message_id</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>If the message is a reply, ID of the original message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardhide">ReplyKeyboardHide</a> or <a href="#forcereply">ForceReply</a></td>
      <td>Options - Optional</td>
      <td>Additional interface options. A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>, <a href="https://core.telegram.org/bots#keyboards">custom reply keyboard</a>, instructions
        to hide keyboard or to force a reply from the user.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendContact({
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
<p>Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). </p>
<blockquote>
  <p>Example: The <a href="https://telegram.me/imagebot">ImageBot</a> needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use <a href="#sendchataction">sendChatAction</a>    with <em>action</em> = <em>upload_photo</em>. The user will see a “sending photo” status for the bot.</p>
</blockquote>
<p>We only recommend using this method when a response from the bot will take a <strong>noticeable</strong> amount of time to arrive.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>action</td>
      <td>String</td>
      <td>Yes</td>
      <td>Type of action to broadcast. Choose one, depending on what the user is about to receive: <em>typing</em> for <a href="#sendmessage">text messages</a>, <em>upload_photo</em> for <a href="#sendphoto">photos</a>, <em>record_video</em> or <em>upload_video</em>        for <a href="#sendvideo">videos</a>, <em>record_audio</em> or <em>upload_audio</em> for <a href="#sendaudio">audio files</a>, <em>upload_document</em> for <a href="#senddocument">general files</a>, <em>find_location</em> for <a href="#sendlocation">location data</a>.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.sendLocation({
    chat_id: @devilssupergroup,
    action: "typing"
}, function (error, res) {
    if (error) throw error;

    if (!res.ok) return console.log(res);
    // treat res here. 
});
</code></pre>

<h4><a id="user-content-getuserprofilephotos" class="anchor" href="#getuserprofilephotos" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getuserprofilephotos" href="#getuserprofilephotos" id="user-content-getuserprofilephotos"><i></i></a>getUserProfilePhotos</h4>
<p>Use this method to get a list of profile pictures for a user. Returns a <a href="#userprofilephotos">UserProfilePhotos</a> object.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>user_id</td>
      <td>Integer</td>
      <td>Yes</td>
      <td>Unique identifier of the target user</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>Sequential number of the first photo to be returned. By default, all photos are returned.</td>
    </tr>
    <tr>
      <td>limit</td>
      <td>Integer</td>
      <td>Options - Optional</td>
      <td>Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.getUserProfilePhotos({
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

<h4><a id="user-content-getfile" class="anchor" href="#getfile" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getfile" href="#getfile" id="user-content-getfile"><i></i></a>getFile</h4>
<p>Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a <a href="#file">File</a> object is returned. The file can then be downloaded via the link <code>https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt;</code>,
  where <code>&lt;file_path&gt;</code> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling <a href="#getfile">getFile</a> again.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>file_id</td>
      <td>String</td>
      <td>Yes</td>
      <td>File identifier to get info about</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> This function may not preserve original file name. Mime type of the file and its name (if available) should be saved when the File object is received.</p>
<h4><a id="user-content-kickchatmember" class="anchor" href="#kickchatmember" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-kickchatmember" href="#kickchatmember" id="user-content-kickchatmember"><i></i></a>kickChatMember</h4>
<p>Use this method to kick a user from a group or a supergroup. In the case of supergroups, the user will not be able to return to the group on their own using invite links, etc., unless <a href="#unbanchatmember">unbanned</a> first. The bot must be an administrator
  in the group for this to work. Returns <em>True</em> on success.</p>
<blockquote>
  <p>Note: This will method only work if the ‘All Members Are Admins’ setting is off in the target group. Otherwise members may only be removed by the group's creator or by the member that added them.</p>
</blockquote>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target group or username of the target supergroup (in the format <code>@supergroupusername</code>)</td>
    </tr>
    <tr>
      <td>user_id</td>
      <td>Integer</td>
      <td>Yes</td>
      <td>Unique identifier of the target user</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-leavechat" class="anchor" href="#leavechat" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-leavechat" href="#leavechat" id="user-content-leavechat"><i></i></a>leaveChat</h4>
<p>Use this method for your bot to leave a group, supergroup or channel. Returns <em>True</em> on success.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target supergroup or channel (in the format <code>@channelusername</code>)</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-unbanchatmember" class="anchor" href="#unbanchatmember" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-unbanchatmember" href="#unbanchatmember" id="user-content-unbanchatmember"><i></i></a>unbanChatMember</h4>
<p>Use this method to unban a previously kicked user in a supergroup. The user will <strong>not</strong> return to the group automatically, but will be able to join via link, etc. The bot must be an administrator in the group for this to work. Returns <em>True</em>  on success.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target group or username of the target supergroup (in the format <code>@supergroupusername</code>)</td>
    </tr>
    <tr>
      <td>user_id</td>
      <td>Integer</td>
      <td>Yes</td>
      <td>Unique identifier of the target user</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-getchat" class="anchor" href="#getchat" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getchat" href="#getchat" id="user-content-getchat"><i></i></a>getChat</h4>
<p>Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a <a href="#chat">Chat</a> object on success.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target supergroup or channel (in the format <code>@channelusername</code>)</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-getchatadministrators" class="anchor" href="#getchatadministrators" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getchatadministrators" href="#getchatadministrators" id="user-content-getchatadministrators"><i></i></a>getChatAdministrators</h4>
<p>Use this method to get a list of administrators in a chat. On success, returns an Array of <a href="#chatmember">ChatMember</a> objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and
  no administrators were appointed, only the creator will be returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target supergroup or channel (in the format <code>@channelusername</code>)</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-getchatmemberscount" class="anchor" href="#getchatmemberscount" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getchatmemberscount" href="#getchatmemberscount" id="user-content-getchatmemberscount"><i></i></a>getChatMembersCount</h4>
<p>Use this method to get the number of members in a chat. Returns <em>Int</em> on success.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target supergroup or channel (in the format <code>@channelusername</code>)</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-getchatmember" class="anchor" href="#getchatmember" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-getchatmember" href="#getchatmember" id="user-content-getchatmember"><i></i></a>getChatMember</h4>
<p>Use this method to get information about a member of a chat. Returns a <a href="#chatmember">ChatMember</a> object on success.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>Yes</td>
      <td>Unique identifier for the target chat or username of the target supergroup or channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>user_id</td>
      <td>Integer</td>
      <td>Yes</td>
      <td>Unique identifier of the target user</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-answercallbackquery" class="anchor" href="#answercallbackquery" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-answercallbackquery" href="#answercallbackquery" id="user-content-answercallbackquery"><i></i></a>answerCallbackQuery</h4>
<p>Use this method to send answers to callback queries sent from <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">inline keyboards</a>. The answer will be displayed to the user as a notification at the top of the chat
  screen or as an alert. On success,
  <em>True</em> is returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>callback_query_id</td>
      <td>String</td>
      <td>Yes</td>
      <td>Unique identifier for the query to be answered</td>
    </tr>
    <tr>
      <td>text</td>
      <td>String</td>
      <td>Optional</td>
      <td>Text of the notification. If not specified, nothing will be shown to the user</td>
    </tr>
    <tr>
      <td>show_alert</td>
      <td>Boolean</td>
      <td>Optional</td>
      <td>If <em>true</em>, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to <em>false</em>.</td>
    </tr>
  </tbody>
</table>

<p>The parameters would look something like this.</p>
<pre><code>
Fam.answerCallbackQuery({
    callback_query_id: 1348134234232,
    text: "Received Query Fam",
    show_alert: false /* test out the false and true, they are nice to check out */
}, function (error, res) {
    if (error) throw error;

    if (!res.ok) return console.log(res);
    // treat res here. 
});
</code></pre>

<h4><a id="user-content-inline-mode-methods" class="anchor" href="#inline-mode-methods" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inline-mode-methods" href="#inline-mode-methods" id="user-content-inline-mode-methods"><i></i></a>Inline mode methods</h4>
<p>Methods and objects used in the inline mode are described in the <a href="#inline-mode">Inline mode section</a>.</p>
<h3><a id="user-content-updating-messages" class="anchor" href="#updating-messages" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-updating-messages" href="#updating-messages" id="user-content-updating-messages"><i></i></a>Updating messages</h3>
<p>The following methods allow you to change an existing message in the message history instead of sending a new one with a result of an action. This is most useful for messages with <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">inline keyboards</a>  using callback queries, but can also help reduce clutter in conversations with regular chat bots.</p>
<p>Please note, that it is currently only possible to edit messages without <em>reply_markup</em> or with <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">inline keyboards</a>.</p>
<h4><a id="user-content-editmessagetext" class="anchor" href="#editmessagetext" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-editmessagetext" href="#editmessagetext" id="user-content-editmessagetext"><i></i></a>editMessageText</h4>
<p>Use this method to edit text messages sent by the bot or via the bot (for <a href="#inline-mode">inline bots</a>). On success, if edited message is sent by the bot, the edited <a href="#message">Message</a> is returned, otherwise <em>True</em> is returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>No</td>
      <td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>message_id</td>
      <td>Integer</td>
      <td>No</td>
      <td>Required if <em>inline_message_id</em> is not specified. Unique identifier of the sent message</td>
    </tr>
    <tr>
      <td>inline_message_id</td>
      <td>String</td>
      <td>No</td>
      <td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message</td>
    </tr>
    <tr>
      <td>text</td>
      <td>String</td>
      <td>Yes</td>
      <td>New text of the message</td>
    </tr>
    <tr>
      <td>parse_mode</td>
      <td>String</td>
      <td>Optional</td>
      <td>Send <a href="#markdown-style"><em>Markdown</em></a> or <a href="#html-style"><em>HTML</em></a>, if you want Telegram apps to show <a href="#formatting-options">bold, italic, fixed-width text or inline URLs</a> in your bot's message.</td>
    </tr>
    <tr>
      <td>disable_web_page_preview</td>
      <td>Boolean</td>
      <td>Optional</td>
      <td>Disables link previews for links in this message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td>Optional</td>
      <td>A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>.</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-editmessagecaption" class="anchor" href="#editmessagecaption" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-editmessagecaption" href="#editmessagecaption" id="user-content-editmessagecaption"><i></i></a>editMessageCaption</h4>
<p>Use this method to edit captions of messages sent by the bot or via the bot (for <a href="#inline-mode">inline bots</a>). On success, if edited message is sent by the bot, the edited <a href="#message">Message</a> is returned, otherwise <em>True</em>  is returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>No</td>
      <td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>message_id</td>
      <td>Integer</td>
      <td>No</td>
      <td>Required if <em>inline_message_id</em> is not specified. Unique identifier of the sent message</td>
    </tr>
    <tr>
      <td>inline_message_id</td>
      <td>String</td>
      <td>No</td>
      <td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td>Optional</td>
      <td>New caption of the message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td>Options - Optional</td>
      <td>A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>.</td>
    </tr>
  </tbody>
</table>

<h4><a id="user-content-editmessagereplymarkup" class="anchor" href="#editmessagereplymarkup" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-editmessagereplymarkup" href="#editmessagereplymarkup" id="user-content-editmessagereplymarkup"><i></i></a>editMessageReplyMarkup</h4>
<p>Use this method to edit only the reply markup of messages sent by the bot or via the bot (for <a href="#inline-mode">inline bots</a>). On success, if edited message is sent by the bot, the edited <a href="#message">Message</a> is returned, otherwise <em>True</em>  is returned.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>chat_id</td>
      <td>Integer or String</td>
      <td>No</td>
      <td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td>
    </tr>
    <tr>
      <td>message_id</td>
      <td>Integer</td>
      <td>No</td>
      <td>Required if <em>inline_message_id</em> is not specified. Unique identifier of the sent message</td>
    </tr>
    <tr>
      <td>inline_message_id</td>
      <td>String</td>
      <td>No</td>
      <td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td>Optional</td>
      <td>A JSON-serialized object for an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating">inline keyboard</a>.</td>
    </tr>
  </tbody>
</table>
<h3><a id="user-content-inline-mode" class="anchor" href="#inline-mode" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inline-mode" href="#inline-mode" id="user-content-inline-mode"><i></i></a>Inline mode</h3>
<p>The following methods and objects allow your bot to work in <a href="/nizarmah/Telefam/blob/master/bots/inline">inline mode</a>.<br>Please see our <a href="/nizarmah/Telefam/blob/master/bots/inline">Introduction to Inline bots</a> for more details.</p>
<p>To enable this option, send the <code>/setinline</code> command to <a href="https://telegram.me/botfather">@BotFather</a> and provide the placeholder text that the user will see in the input field after typing your bot’s name.</p>
<h4><a id="user-content-inlinequery" class="anchor" href="#inlinequery" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequery" href="#inlinequery" id="user-content-inlinequery"><i></i></a>InlineQuery</h4>
<p>This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this query</td>
    </tr>
    <tr>
      <td>from</td>
      <td><a href="#user">User</a></td>
      <td>Sender</td>
    </tr>
    <tr>
      <td>location</td>
      <td><a href="#location">Location</a></td>
      <td><em>Optional</em>. Sender location, only for bots that request user location</td>
    </tr>
    <tr>
      <td>query</td>
      <td>String</td>
      <td>Text of the query (up to 512 characters)</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>String</td>
      <td>Offset of the results to be returned, can be controlled by the bot</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-answerinlinequery" class="anchor" href="#answerinlinequery" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-answerinlinequery" href="#answerinlinequery" id="user-content-answerinlinequery"><i></i></a>answerInlineQuery</h4>
<p>Use this method to send answers to an inline query. On success, <em>True</em> is returned.<br>No more than <strong>50</strong> results per query are allowed.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Parameters</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Required</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>inline_query_id</td>
      <td>String</td>
      <td>Yes</td>
      <td>Unique identifier for the answered query</td>
    </tr>
    <tr>
      <td>results</td>
      <td>Array of <a href="#inlinequeryresult">InlineQueryResult</a></td>
      <td>Yes</td>
      <td>A JSON-serialized array of results for the inline query</td>
    </tr>
    <tr>
      <td>cache_time</td>
      <td>Integer</td>
      <td>Optional</td>
      <td>The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.</td>
    </tr>
    <tr>
      <td>is_personal</td>
      <td>Boolean</td>
      <td>Optional</td>
      <td>Pass <em>True</em>, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query</td>
    </tr>
    <tr>
      <td>next_offset</td>
      <td>String</td>
      <td>Optional</td>
      <td>Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don‘t support pagination. Offset length can’t exceed 64 bytes.</td>
    </tr>
    <tr>
      <td>switch_pm_text</td>
      <td>String</td>
      <td>Optional</td>
      <td>If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter <em>switch_pm_parameter</em></td>
    </tr>
    <tr>
      <td>switch_pm_parameter</td>
      <td>String</td>
      <td>Optional</td>
      <td>Parameter for the start message sent to the bot when user presses the switch button<br><br><em>Example:</em> An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly.
        To do this, it displays a ‘Connect your YouTube account’ button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot
        to return an oauth link. Once done, the bot can offer a <a href="#inlinekeyboardmarkup"><em>switch_inline</em></a> button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.</td>
    </tr>
  </tbody>
</table>

<p>Instead of explaining it, I'll just show an example of my <a href="https://github.com/nizarmah/archwiki_bot">ArchWiki Telegram Bot</a> to demonstrate how I dealt with inline queries</p>

<h4><a id="user-content-inlinequeryresult" class="anchor" href="#inlinequeryresult" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresult" href="#inlinequeryresult" id="user-content-inlinequeryresult"><i></i></a>InlineQueryResult</h4>
<p>This object represents one result of an inline query. Telegram clients currently support results of the following 19 types:</p>
<ul>
  <li><a href="#inlinequeryresultcachedaudio">InlineQueryResultCachedAudio</a></li>
  <li><a href="#inlinequeryresultcacheddocument">InlineQueryResultCachedDocument</a></li>
  <li><a href="#inlinequeryresultcachedgif">InlineQueryResultCachedGif</a></li>
  <li><a href="#inlinequeryresultcachedmpeg4gif">InlineQueryResultCachedMpeg4Gif</a></li>
  <li><a href="#inlinequeryresultcachedphoto">InlineQueryResultCachedPhoto</a></li>
  <li><a href="#inlinequeryresultcachedsticker">InlineQueryResultCachedSticker</a></li>
  <li><a href="#inlinequeryresultcachedvideo">InlineQueryResultCachedVideo</a></li>
  <li><a href="#inlinequeryresultcachedvoice">InlineQueryResultCachedVoice</a></li>
  <li><a href="#inlinequeryresultarticle">InlineQueryResultArticle</a></li>
  <li><a href="#inlinequeryresultaudio">InlineQueryResultAudio</a></li>
  <li><a href="#inlinequeryresultcontact">InlineQueryResultContact</a></li>
  <li><a href="#inlinequeryresultdocument">InlineQueryResultDocument</a></li>
  <li><a href="#inlinequeryresultgif">InlineQueryResultGif</a></li>
  <li><a href="#inlinequeryresultlocation">InlineQueryResultLocation</a></li>
  <li><a href="#inlinequeryresultmpeg4gif">InlineQueryResultMpeg4Gif</a></li>
  <li><a href="#inlinequeryresultphoto">InlineQueryResultPhoto</a></li>
  <li><a href="#inlinequeryresultvenue">InlineQueryResultVenue</a></li>
  <li><a href="#inlinequeryresultvideo">InlineQueryResultVideo</a></li>
  <li><a href="#inlinequeryresultvoice">InlineQueryResultVoice</a></li>
</ul>
<h4><a id="user-content-inlinequeryresultarticle" class="anchor" href="#inlinequeryresultarticle" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultarticle" href="#inlinequeryresultarticle" id="user-content-inlinequeryresultarticle"><i></i></a>InlineQueryResultArticle</h4>
<p>Represents a link to an article or web page.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>article</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 Bytes</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Title of the result</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td>Content of the message to be sent</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>url</td>
      <td>String</td>
      <td><em>Optional</em>. URL of the result</td>
    </tr>
    <tr>
      <td>hide_url</td>
      <td>Boolean</td>
      <td><em>Optional</em>. Pass <em>True</em>, if you don't want the URL to be shown in the message</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td><em>Optional</em>. Short description of the result</td>
    </tr>
    <tr>
      <td>thumb_url</td>
      <td>String</td>
      <td><em>Optional</em>. Url of the thumbnail for the result</td>
    </tr>
    <tr>
      <td>thumb_width</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail width</td>
    </tr>
    <tr>
      <td>thumb_height</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail height</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-inlinequeryresultphoto" class="anchor" href="#inlinequeryresultphoto" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultphoto" href="#inlinequeryresultphoto" id="user-content-inlinequeryresultphoto"><i></i></a>InlineQueryResultPhoto</h4>
<p>Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the photo.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>photo</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>photo_url</td>
      <td>String</td>
      <td>A valid URL of the photo. Photo must be in <strong>jpeg</strong> format. Photo size must not exceed 5MB</td>
    </tr>
    <tr>
      <td>thumb_url</td>
      <td>String</td>
      <td>URL of the thumbnail for the photo</td>
    </tr>
    <tr>
      <td>photo_width</td>
      <td>Integer</td>
      <td><em>Optional</em>. Width of the photo</td>
    </tr>
    <tr>
      <td>photo_height</td>
      <td>Integer</td>
      <td><em>Optional</em>. Height of the photo</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td><em>Optional</em>. Title for the result</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td><em>Optional</em>. Short description of the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the photo to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the photo</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-inlinequeryresultgif" class="anchor" href="#inlinequeryresultgif" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultgif" href="#inlinequeryresultgif" id="user-content-inlinequeryresultgif"><i></i></a>InlineQueryResultGif</h4>
<p>Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the animation.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>gif</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>gif_url</td>
      <td>String</td>
      <td>A valid URL for the GIF file. File size must not exceed 1MB</td>
    </tr>
    <tr>
      <td>gif_width</td>
      <td>Integer</td>
      <td><em>Optional</em>. Width of the GIF</td>
    </tr>
    <tr>
      <td>gif_height</td>
      <td>Integer</td>
      <td><em>Optional</em>. Height of the GIF</td>
    </tr>
    <tr>
      <td>thumb_url</td>
      <td>String</td>
      <td>URL of the static thumbnail for the result (jpeg or gif)</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td><em>Optional</em>. Title for the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the GIF file to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the GIF animation</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-inlinequeryresultmpeg4gif" class="anchor" href="#inlinequeryresultmpeg4gif" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultmpeg4gif" href="#inlinequeryresultmpeg4gif" id="user-content-inlinequeryresultmpeg4gif"><i></i></a>InlineQueryResultMpeg4Gif</h4>
<p>Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use <em>input_message_content</em> to send a message with the specified
  content instead of the animation.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>mpeg4_gif</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>mpeg4_url</td>
      <td>String</td>
      <td>A valid URL for the MP4 file. File size must not exceed 1MB</td>
    </tr>
    <tr>
      <td>mpeg4_width</td>
      <td>Integer</td>
      <td><em>Optional</em>. Video width</td>
    </tr>
    <tr>
      <td>mpeg4_height</td>
      <td>Integer</td>
      <td><em>Optional</em>. Video height</td>
    </tr>
    <tr>
      <td>thumb_url</td>
      <td>String</td>
      <td>URL of the static thumbnail (jpeg or gif) for the result</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td><em>Optional</em>. Title for the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the MPEG-4 file to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the video animation</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-inlinequeryresultvideo" class="anchor" href="#inlinequeryresultvideo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultvideo" href="#inlinequeryresultvideo" id="user-content-inlinequeryresultvideo"><i></i></a>InlineQueryResultVideo</h4>
<p>Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use <em>input_message_content</em> to send a message with the specified
  content instead of the video.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>video</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>video_url</td>
      <td>String</td>
      <td>A valid URL for the embedded video player or video file</td>
    </tr>
    <tr>
      <td>mime_type</td>
      <td>String</td>
      <td>Mime type of the content of video url, “text/html” or “video/mp4”</td>
    </tr>
    <tr>
      <td>thumb_url</td>
      <td>String</td>
      <td>URL of the thumbnail (jpeg only) for the video</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Title for the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the video to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>video_width</td>
      <td>Integer</td>
      <td><em>Optional</em>. Video width</td>
    </tr>
    <tr>
      <td>video_height</td>
      <td>Integer</td>
      <td><em>Optional</em>. Video height</td>
    </tr>
    <tr>
      <td>video_duration</td>
      <td>Integer</td>
      <td><em>Optional</em>. Video duration in seconds</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td><em>Optional</em>. Short description of the result</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the video</td>
    </tr>
  </tbody>
</table>
<h4><a id="user-content-inlinequeryresultaudio" class="anchor" href="#inlinequeryresultaudio" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultaudio" href="#inlinequeryresultaudio" id="user-content-inlinequeryresultaudio"><i></i></a>InlineQueryResultAudio</h4>
<p>Represents a link to an mp3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the audio.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>audio</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>audio_url</td>
      <td>String</td>
      <td>A valid URL for the audio file</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Title</td>
    </tr>
    <tr>
      <td>performer</td>
      <td>String</td>
      <td><em>Optional</em>. Performer</td>
    </tr>
    <tr>
      <td>audio_duration</td>
      <td>Integer</td>
      <td><em>Optional</em>. Audio duration in seconds</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the audio</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>
<h4><a id="user-content-inlinequeryresultvoice" class="anchor" href="#inlinequeryresultvoice" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultvoice" href="#inlinequeryresultvoice" id="user-content-inlinequeryresultvoice"><i></i></a>InlineQueryResultVoice</h4>
<p>Represents a link to a voice recording in an .ogg container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of
  the the voice message.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>voice</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>voice_url</td>
      <td>String</td>
      <td>A valid URL for the voice recording</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Recording title</td>
    </tr>
    <tr>
      <td>voice_duration</td>
      <td>Integer</td>
      <td><em>Optional</em>. Recording duration in seconds</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the voice recording</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>
<h4><a id="user-content-inlinequeryresultdocument" class="anchor" href="#inlinequeryresultdocument" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultdocument" href="#inlinequeryresultdocument" id="user-content-inlinequeryresultdocument"><i></i></a>InlineQueryResultDocument</h4>
<p>Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the file. Currently, only <strong>.PDF</strong>  and <strong>.ZIP</strong> files can be sent using this method.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>document</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Title for the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the document to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>document_url</td>
      <td>String</td>
      <td>A valid URL for the file</td>
    </tr>
    <tr>
      <td>mime_type</td>
      <td>String</td>
      <td>Mime type of the content of the file, either “application/pdf” or “application/zip”</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td><em>Optional</em>. Short description of the result</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. Inline keyboard attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the file</td>
    </tr>
    <tr>
      <td>thumb_url</td>
      <td>String</td>
      <td><em>Optional</em>. URL of the thumbnail (jpeg only) for the file</td>
    </tr>
    <tr>
      <td>thumb_width</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail width</td>
    </tr>
    <tr>
      <td>thumb_height</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail height</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>
<h4><a id="user-content-inlinequeryresultlocation" class="anchor" href="#inlinequeryresultlocation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultlocation" href="#inlinequeryresultlocation" id="user-content-inlinequeryresultlocation"><i></i></a>InlineQueryResultLocation</h4>
<p>Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the location.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>location</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 Bytes</td>
    </tr>
    <tr>
      <td>latitude</td>
      <td>Float number</td>
      <td>Location latitude in degrees</td>
    </tr>
    <tr>
      <td>longitude</td>
      <td>Float number</td>
      <td>Location longitude in degrees</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Location title</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the location</td>
    </tr>
    <tr>
      <td>thumb_url</td>
      <td>String</td>
      <td><em>Optional</em>. Url of the thumbnail for the result</td>
    </tr>
    <tr>
      <td>thumb_width</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail width</td>
    </tr>
    <tr>
      <td>thumb_height</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail height</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>
<h4><a id="user-content-inlinequeryresultvenue" class="anchor" href="#inlinequeryresultvenue" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultvenue" href="#inlinequeryresultvenue" id="user-content-inlinequeryresultvenue"><i></i></a>InlineQueryResultVenue</h4>
<p>Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the venue.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>venue</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 Bytes</td>
    </tr>
    <tr>
      <td>latitude</td>
      <td>Float</td>
      <td>Latitude of the venue location in degrees</td>
    </tr>
    <tr>
      <td>longitude</td>
      <td>Float</td>
      <td>Longitude of the venue location in degrees</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Title of the venue</td>
    </tr>
    <tr>
      <td>address</td>
      <td>String</td>
      <td>Address of the venue</td>
    </tr>
    <tr>
      <td>foursquare_id</td>
      <td>String</td>
      <td><em>Optional</em>. Foursquare identifier of the venue if known</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the venue</td>
    </tr>
    <tr>
      <td>thumb_url</td>
      <td>String</td>
      <td><em>Optional</em>. Url of the thumbnail for the result</td>
    </tr>
    <tr>
      <td>thumb_width</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail width</td>
    </tr>
    <tr>
      <td>thumb_height</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail height</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>
<h4><a id="user-content-inlinequeryresultcontact" class="anchor" href="#inlinequeryresultcontact" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultcontact" href="#inlinequeryresultcontact" id="user-content-inlinequeryresultcontact"><i></i></a>InlineQueryResultContact</h4>
<p>Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the contact.</p>
<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>contact</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 Bytes</td>
    </tr>
    <tr>
      <td>phone_number</td>
      <td>String</td>
      <td>Contact's phone number</td>
    </tr>
    <tr>
      <td>first_name</td>
      <td>String</td>
      <td>Contact's first name</td>
    </tr>
    <tr>
      <td>last_name</td>
      <td>String</td>
      <td><em>Optional</em>. Contact's last name</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the contact</td>
    </tr>
    <tr>
      <td>thumb_url</td>
      <td>String</td>
      <td><em>Optional</em>. Url of the thumbnail for the result</td>
    </tr>
    <tr>
      <td>thumb_width</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail width</td>
    </tr>
    <tr>
      <td>thumb_height</td>
      <td>Integer</td>
      <td><em>Optional</em>. Thumbnail height</td>
    </tr>
  </tbody>
</table>
<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>
<h4><a id="user-content-inlinequeryresultcachedphoto" class="anchor" href="#inlinequeryresultcachedphoto" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultcachedphoto" href="#inlinequeryresultcachedphoto" id="user-content-inlinequeryresultcachedphoto"><i></i></a>InlineQueryResultCachedPhoto</h4>
<p>Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the
  photo.
</p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>photo</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>photo_file_id</td>
      <td>String</td>
      <td>A valid file identifier of the photo</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td><em>Optional</em>. Title for the result</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td><em>Optional</em>. Short description of the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the photo to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the photo</td>
    </tr>
  </tbody>
</table>

<h4><a id="user-content-inlinequeryresultcachedgif" class="anchor" href="#inlinequeryresultcachedgif" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultcachedgif" href="#inlinequeryresultcachedgif" id="user-content-inlinequeryresultcachedgif"><i></i></a>InlineQueryResultCachedGif</h4>

<p>Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use <em>input_message_content</em> to send a message with specified
  content instead of the animation.</p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>gif</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>gif_file_id</td>
      <td>String</td>
      <td>A valid file identifier for the GIF file</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td><em>Optional</em>. Title for the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the GIF file to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. An <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the GIF animation</td>
    </tr>
  </tbody>
</table>

<h4><a id="user-content-inlinequeryresultcachedmpeg4gif" class="anchor" href="#inlinequeryresultcachedmpeg4gif" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultcachedmpeg4gif" href="#inlinequeryresultcachedmpeg4gif" id="user-content-inlinequeryresultcachedmpeg4gif"><i></i></a>InlineQueryResultCachedMpeg4Gif</h4>

<p>Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use <em>input_message_content</em>  to send a message with the specified content instead of the animation.</p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>mpeg4_gif</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>mpeg4_file_id</td>
      <td>String</td>
      <td>A valid file identifier for the MP4 file</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td><em>Optional</em>. Title for the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the MPEG-4 file to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. An <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the video animation</td>
    </tr>
  </tbody>
</table>

<h4><a id="user-content-inlinequeryresultcachedsticker" class="anchor" href="#inlinequeryresultcachedsticker" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultcachedsticker" href="#inlinequeryresultcachedsticker" id="user-content-inlinequeryresultcachedsticker"><i></i></a>InlineQueryResultCachedSticker</h4>

<p>Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the sticker.</p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>sticker</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>sticker_file_id</td>
      <td>String</td>
      <td>A valid file identifier of the sticker</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. An <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the sticker</td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>

<h4><a id="user-content-inlinequeryresultcacheddocument" class="anchor" href="#inlinequeryresultcacheddocument" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultcacheddocument" href="#inlinequeryresultcacheddocument" id="user-content-inlinequeryresultcacheddocument"><i></i></a>InlineQueryResultCachedDocument</h4>

<p>Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the
  file. Currently, only <strong>pdf</strong>-files and <strong>zip</strong> archives can be sent using this method.</p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>document</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Title for the result</td>
    </tr>
    <tr>
      <td>document_file_id</td>
      <td>String</td>
      <td>A valid file identifier for the file</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td><em>Optional</em>. Short description of the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the document to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. An <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the file</td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>

<h4><a id="user-content-inlinequeryresultcachedvideo" class="anchor" href="#inlinequeryresultcachedvideo" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultcachedvideo" href="#inlinequeryresultcachedvideo" id="user-content-inlinequeryresultcachedvideo"><i></i></a>InlineQueryResultCachedVideo</h4>

<p>Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead
  of the video.</p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>video</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>video_file_id</td>
      <td>String</td>
      <td>A valid file identifier for the video file</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Title for the result</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td><em>Optional</em>. Short description of the result</td>
    </tr>
    <tr>
      <td>caption</td>
      <td>String</td>
      <td><em>Optional</em>. Caption of the video to be sent, 0-200 characters</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. An <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the video</td>
    </tr>
  </tbody>
</table>

<h4><a id="user-content-inlinequeryresultcachedvoice" class="anchor" href="#inlinequeryresultcachedvoice" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultcachedvoice" href="#inlinequeryresultcachedvoice" id="user-content-inlinequeryresultcachedvoice"><i></i></a>InlineQueryResultCachedVoice</h4>

<p>Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the voice message.</p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>voice</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>voice_file_id</td>
      <td>String</td>
      <td>A valid file identifier for the voice message</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Voice message title</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. An <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the voice message</td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>

<h4><a id="user-content-inlinequeryresultcachedaudio" class="anchor" href="#inlinequeryresultcachedaudio" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inlinequeryresultcachedaudio" href="#inlinequeryresultcachedaudio" id="user-content-inlinequeryresultcachedaudio"><i></i></a>InlineQueryResultCachedAudio</h4>

<p>Represents a link to an mp3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use <em>input_message_content</em> to send a message with the specified content instead of the audio.</p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Type of the result, must be <em>audio</em></td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Unique identifier for this result, 1-64 bytes</td>
    </tr>
    <tr>
      <td>audio_file_id</td>
      <td>String</td>
      <td>A valid file identifier for the audio file</td>
    </tr>
    <tr>
      <td>reply_markup</td>
      <td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td>
      <td><em>Optional</em>. An <a href="/nizarmah/Telefam/blob/master/bots#inline-keyboards-and-on-the-fly-updating">Inline keyboard</a> attached to the message</td>
    </tr>
    <tr>
      <td>input_message_content</td>
      <td><a href="#inputmessagecontent">InputMessageContent</a></td>
      <td><em>Optional</em>. Content of the message to be sent instead of the audio</td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>

<h4><a id="user-content-inputmessagecontent" class="anchor" href="#inputmessagecontent" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inputmessagecontent" href="#inputmessagecontent" id="user-content-inputmessagecontent"><i></i></a>InputMessageContent</h4>

<p>This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:</p>

<ul>
  <li><a href="#inputtextmessagecontent">InputTextMessageContent</a></li>
  <li><a href="#inputlocationmessagecontent">InputLocationMessageContent</a></li>
  <li><a href="#inputvenuemessagecontent">InputVenueMessageContent</a></li>
  <li><a href="#inputcontactmessagecontent">InputContactMessageContent</a></li>
</ul>

<h4><a id="user-content-inputtextmessagecontent" class="anchor" href="#inputtextmessagecontent" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inputtextmessagecontent" href="#inputtextmessagecontent" id="user-content-inputtextmessagecontent"><i></i></a>InputTextMessageContent</h4>

<p>Represents the <a href="#inputmessagecontent">content</a> of a text message to be sent as the result of an inline query. </p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>message_text</td>
      <td>String</td>
      <td>Text of the message to be sent, 1-4096 characters</td>
    </tr>
    <tr>
      <td>parse_mode</td>
      <td>String</td>
      <td><em>Optional</em>. Send <a href="#markdown-style"><em>Markdown</em></a> or <a href="#html-style"><em>HTML</em></a>, if you want Telegram apps to show <a href="#formatting-options">bold, italic, fixed-width text or inline URLs</a> in your bot's message.</td>
    </tr>
    <tr>
      <td>disable_web_page_preview</td>
      <td>Boolean</td>
      <td><em>Optional</em>. Disables link previews for links in the sent message</td>
    </tr>
  </tbody>
</table>

<h4><a id="user-content-inputlocationmessagecontent" class="anchor" href="#inputlocationmessagecontent" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inputlocationmessagecontent" href="#inputlocationmessagecontent" id="user-content-inputlocationmessagecontent"><i></i></a>InputLocationMessageContent</h4>

<p>Represents the <a href="#inputmessagecontent">content</a> of a location message to be sent as the result of an inline query. </p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>latitude</td>
      <td>Float</td>
      <td>Latitude of the location in degrees</td>
    </tr>
    <tr>
      <td>longitude</td>
      <td>Float</td>
      <td>Longitude of the location in degrees</td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>

<h4><a id="user-content-inputvenuemessagecontent" class="anchor" href="#inputvenuemessagecontent" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inputvenuemessagecontent" href="#inputvenuemessagecontent" id="user-content-inputvenuemessagecontent"><i></i></a>InputVenueMessageContent</h4>

<p>Represents the <a href="#inputmessagecontent">content</a> of a venue message to be sent as the result of an inline query. </p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>latitude</td>
      <td>Float</td>
      <td>Latitude of the venue in degrees</td>
    </tr>
    <tr>
      <td>longitude</td>
      <td>Float</td>
      <td>Longitude of the venue in degrees</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Name of the venue</td>
    </tr>
    <tr>
      <td>address</td>
      <td>String</td>
      <td>Address of the venue</td>
    </tr>
    <tr>
      <td>foursquare_id</td>
      <td>String</td>
      <td><em>Optional</em>. Foursquare identifier of the venue, if known</td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>

<h4><a id="user-content-inputcontactmessagecontent" class="anchor" href="#inputcontactmessagecontent" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-inputcontactmessagecontent" href="#inputcontactmessagecontent" id="user-content-inputcontactmessagecontent"><i></i></a>InputContactMessageContent</h4>

<p>Represents the <a href="#inputmessagecontent">content</a> of a contact message to be sent as the result of an inline query. </p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>phone_number</td>
      <td>String</td>
      <td>Contact's phone number</td>
    </tr>
    <tr>
      <td>first_name</td>
      <td>String</td>
      <td>Contact's first name</td>
    </tr>
    <tr>
      <td>last_name</td>
      <td>String</td>
      <td><em>Optional</em>. Contact's last name</td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.</p>

<h4><a id="user-content-choseninlineresult" class="anchor" href="#choseninlineresult" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a name="user-content-choseninlineresult" href="#choseninlineresult" id="user-content-choseninlineresult"><i></i></a>ChosenInlineResult</h4>

<p>Represents a <a href="#inlinequeryresult">result</a> of an inline query that was chosen by the user and sent to their chat partner. </p>

<table>
  <tbody>
    <tr>
      <td><strong>Field</strong></td>
      <td><strong>Type</strong></td>
      <td><strong>Description</strong></td>
    </tr>
    <tr>
      <td>result_id</td>
      <td>String</td>
      <td>The unique identifier for the result that was chosen</td>
    </tr>
    <tr>
      <td>from</td>
      <td><a href="#user">User</a></td>
      <td>The user that chose the result</td>
    </tr>
    <tr>
      <td>location</td>
      <td><a href="#location">Location</a></td>
      <td><em>Optional</em>. Sender location, only for bots that require user location</td>
    </tr>
    <tr>
      <td>inline_message_id</td>
      <td>String</td>
      <td><em>Optional</em>. Identifier of the sent inline message. Available only if there is an <a href="#inlinekeyboardmarkup">inline keyboard</a> attached to the message. Will be also received in <a href="#callbackquery">callback queries</a> and can be
        used to <a href="#updating-messages">edit</a> the message.</td>
    </tr>
    <tr>
      <td>query</td>
      <td>String</td>
      <td>The query that was used to obtain the result</td>
    </tr>
  </tbody>
</table>

<hr>