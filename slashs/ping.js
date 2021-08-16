const Discord = require("discord.js");

exports.name = "ping";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
    interaction.reply({ content: 'Pong!'})

}