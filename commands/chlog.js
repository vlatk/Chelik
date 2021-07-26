const Discord = require("discord.js");

exports.name = "chlog";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    var embed = new Discord.MessageEmbed({title: "Чейнджлог Версии V1.5a", description: "Итак! Что же нового в этой версии? \n\n Это обновление довольно маленькое. \n\n Добавлена команда \`~gdstats\`. Подробно \`~help gdstats\`"}).addFields(
        { name: '\u200B', value: '\u200B' }, 
        { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setColor("GREEN").setTimestamp().setFooter("Челик БОТ | V1.5a", 'https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp');
      mess.channel.send(embed)
}