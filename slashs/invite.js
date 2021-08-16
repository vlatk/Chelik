const Discord = require("discord.js");
const request = require("request")

exports.name = "invite";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
    var text = `**[>> клик сюды <<](https://discord.com/api/oauth2/authorize?client_id=726865963424677909&scope=bot%20applications.commands&permissions=8)**`
    var embed = new Discord.MessageEmbed({title: 'Пригласите Челика к себе!', description: text}).setColor("GREEN");
    interaction.reply({ embeds: [embed] });
}