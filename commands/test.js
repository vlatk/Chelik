const Discord = require("discord.js");

exports.name = "test";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    var text = 'Тест!'
    var embed = new Discord.MessageEmbed({title: text, description: 'Это команда тест!'}).setColor("RANDOM");
    mess.channel.send(embed);
}