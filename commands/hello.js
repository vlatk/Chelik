
const Discord = require("discord.js");

exports.name = "hello";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    var text = 'Приветики'
    var embed = new Discord.MessageEmbed({title: text, description: 'привет))'}).setColor("BLUE");
    mess.channel.send(embed);
}