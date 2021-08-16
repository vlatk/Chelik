const Discord = require("discord.js");

    
exports.name = "c";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
var embed = new Discord.MessageEmbed({title: 'Команды консоли', description:`\`~reload\` - перезагружает файл определенной команды.
\`~eval <код>\` - выполняет код который вы напишите.`}).addFields({name: '<:void:863803473460068402>', value: '<:void:863803473460068402>', inline: true}).setColor('RED').setFooter('Команды консоли доступны только разработчикам!', "https://cdn.discordapp.com/emojis/868876387119931392.png?v=1");
mess.reply({ embeds: [embed], repliedUser: false})
}