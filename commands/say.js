const Discord = require("discord.js");

exports.name = "say";
exports.guildonly = false;

exports.run = async (robot, mess, args) => {
    args = mess.content.split(` `);
    args.shift();
    args = args.join(` `);
    
    mess.delete().catch(); // Удаление сообщения пользователя после отправки 
    
    mess.channel.send(args, { allowedMentions: { parse: [], repliedUser: false } });
}