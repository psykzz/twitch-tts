const say = require('say');
const irc = require('irc');

const server = 'irc.chat.twitch.tv';
const port = '6667';
const username = 'psykzz';

// http://twitchapps.com/tmi/
const token = 'changeme';

const client = new irc.Client(server, username, {
    channels: [`#${username}`],
    password: token,
});

client.addListener('message', (from, to, message) => {
    say.speak(`${from}: ${message}`)
    console.log(`${from} => ${to}: ${message}`)
});

client.addListener('error', console.error);
