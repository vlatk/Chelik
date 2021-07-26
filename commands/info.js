const Discord = require("discord.js");

exports.name = "info";
exports.guildonly = true;

exports.run = async (robot, mess, args)=>{
    var embed = new Discord.MessageEmbed({title: "Челик - это простой и легкий бот для личной компании и друзей. Здесь нету сложных и непонятных команд.", description: `
    Простой бот для модерации. \n
    НО! Несмотря на это я регулярно добавляю интересные команды. Например сейчас, 
    у Челика есть команды с помощью которых можно узнать свою или статистику клуб в игре Brawl Stars, а также узнать совю или статистику уровня в игре Geometry Dash. \n
    Тоже самое есть и с командой covid которая покажет вам статистику забовелание COVID-19 в мире или странах (Россия, Кипр, Турция, Казахстан, Украина, США). \n
    На этом пока все! 
    Но бот регулярно обновляется а вместе с ним и эта команда :)`}).setThumbnail("https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp").addFields(
      { name: '\u200B', value: '\u200B' }, 
      { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setColor("GREEN").setTimestamp().setFooter("Челик БОТ | V1.5a", 'https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp');
  mess.channel.send(embed)
}