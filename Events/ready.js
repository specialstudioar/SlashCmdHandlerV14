const { colors, backcolor } = require('console-log.js')
const { Events, ActivityType, ApplicationCommand } = require("discord.js");
const client = require("../index");

const allevents = require('../Handlers/events')




const { Activity, Status } = require('../Json/config.json')

client.on(Events.ClientReady, async (c) => {

  client.user.setStatus(Status)
  setInterval(() => {
let Ac =  Activity[Math.floor(Math.random() * Activity.length)];
    client.user.setActivity(Ac, { type: ActivityType.Playing })

},5000  )




console.log('\n')
console.log(client.user.username + "  ->  Is Ready")
console.log('\n')
console.log('Status  (' + Status + ')')
console.log('\n')
console.log('ApplicationCommands  (' + client.commands.size + `) Loaded`, )
console.log('\n')
console.log('Events  ' + allevents.length + '  Loaded')
  

});