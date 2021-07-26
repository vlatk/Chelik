const Discord = require("discord.js");

exports.name = "oir";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{

  //Во первых сделаем удобнее. Начнем с рандома
  var random = Math.floor(Math.random() * 3) + 1
  
  //Теперь сделаем так
  var text = "";
  
  //Посмотри урок про конструкцию switch case
  
  switch(random){
  case 1:
  text = "🌕 Орёл!"
  break;
  case 2:
  text = "🌑 Решка!";
  break; 
  case 3:
  text = "🌗 Монета упала ребром";
  break; 
  default:
  text="ошибка";
  }
  
  //Теперь объявляем ембед
  var embed = new Discord.MessageEmbed({title: "Монетка подбрасывается...", description: `**${text}**`}).setColor("DARK_BUT_NOT_BLACK").addFields({name: '<:void:863803473460068402>', value: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬', inline: true}).setTimestamp().setFooter(mess.author.tag, mess.author.displayAvatarURL());
  
  mess.channel.send(embed);
}