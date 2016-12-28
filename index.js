var say = require('say');
var irc = require('irc');

var server = 'irc.chat.twitch.tv';
var port = '6667';
var username = 'psykzz';

// get token from http://twitchapps.com/tmi/
var token = 'oauth:ewo3347cfj51tj02y29a1hqg7iqr8m';

var client = new irc.Client(server, username, {
    channels: [`#${username}`],
    // debug: true,
    // showErrors: true,
    password: token,
});

client.addListener('message', function (from, to, message) {
    say.speak(from + ': ' + message)
    console.log(from + ' => ' + to + ': ' + message);
});

client.addListener('error', function(message) {
    console.error(message);
});
