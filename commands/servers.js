const Discord = require("discord.js");

exports.name = "servers";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    mess.channel.send({embeds: [new Discord.MessageEmbed({title: "Cервера Челика:", description: `<@726865963424677909> находиться на **${robot.guilds.cache.size}** серверах!`}).setColor("RANDOM").addFields({name: '\n\n_ _', value: '_ _', inline: false}, {name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬', value: '_ _', inline: true}).setTimestamp().setFooter("Челик БОТ", 'https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp')]});
}