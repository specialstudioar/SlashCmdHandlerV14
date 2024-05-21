const { SlashCommandBuilder } = require('discord.js');
const client = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Get the bot\'s ping'),

    async execute(interaction) {

        if (!interaction.guild) return interaction.reply({ content: `> - **This Command Only Used in Servers**` , ephemeral: true});
    

        await interaction.deferReply();

        const pinging = await interaction.editReply({ content: 'Pinging...' });



        await pinging.edit({ content: `My Ping Is ${client.ws.ping}` });
        
    },
};
