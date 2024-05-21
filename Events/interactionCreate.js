const {
  Events,
  EmbedBuilder,
  ModalBuilder,
  TextInputBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  TextInputStyle,
} = require("discord.js");
const client = require("../index");

client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isChatInputCommand()) {
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command)
      return console.log(
        `No command matching ${interaction.commandName} was found.`
      );

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(`Error Executing ${interaction.commandName}`);
      console.error(error);
    }
  }


});
