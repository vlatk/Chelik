const Discord = require("discord.js");
const request = require("request")
const ver = require("./ver.json")

exports.name = "chlog";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
  var embed = new Discord.MessageEmbed({title: `<:file:875308267931328512>**Чейнджлог Версии ${ver.bot_ver}**`, description: 
  ``}).setImage('https://media.discordapp.net/attachments/880413833741606912/891629943174348890/PicsArt_09-26-01.00.35.jpg').setColor("GREEN").setTimestamp().setFooter(`Челик БОТ | ${ver.bot_ver}`, 'https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp');
    interaction.reply({ embeds: [embed] })
}