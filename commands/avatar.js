const Discord = require("discord.js");

exports.name = "avatar";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    let user = mess.mentions.users.first()
    if(!user){
        user = mess.author;
    }
  mess.channel.send( new Discord.MessageEmbed({title: ``, description: `**<@${user.id}> аватар:**`}).setImage(`${user.displayAvatarURL({size: 1024, dynamic: true})}`).setColor("RANDOM"))
}