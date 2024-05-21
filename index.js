const fs = require("node:fs");
const path = require("node:path");
const { Client, GatewayIntentBits, Collection, Partials } = require("discord.js");
const { Token, Prefix } = require("./Json/config.json");
const client = new Client({
intents: [Object.keys(GatewayIntentBits)],
partials: [Object.keys(Partials)]
});
require("events").EventEmitter.defaultMaxListeners = 99999999999;
const m = require('ansi-colors')

//=/== ™||> ==/=//
module.exports = client;
client.Cmd = new Collection()
client.commands = new Collection();

fs.readdirSync('./Handlers').forEach((h) => {
require(`./Handlers/${h}`)(client);
});

client.login(Token).catch((err) => {
console.log(m.red.bold.underline.bgBlack("Error in Token  !" + `\n\n` + err + `\n\n`))
});


/*/----------------Special Studio--------------/*/

/*مـلاحـظـات:

تقدر تضيف اوامر بريفكس في الاندكس شرط تكون V14*/


client.on('messageCreate', msg => {
    if (msg.author.bot && !msg.guild) return
    if (msg.content.startsWith(Prefix + 'ping')) {
        msg.reply(`My Ping Is ${client.ws.ping} ⚙️`)
    }
})