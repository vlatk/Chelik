const Discord = require("discord.js");
    const request = require("request")
    
exports.name = "uuid";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
if(!args[0]){ let botmsg = await mess.channel.send({embeds: [new Discord.MessageEmbed({title: 'Ошибка!', description: 'Введите ник игрока!'}).setThumbnail('https://cdn.discordapp.com/emojis/871344466898853900.gif?v=1').setFooter('Это сообщение удалиться через 5 секунд.')]})
    setTimeout(function(){
        botmsg.delete()
      }, 5000)};

if(args[0]){request({url: `https://api.mojang.com/users/profiles/minecraft/${args[0]}`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
        if(err) return console.error(err);
        try{var result1 = JSON.parse(body);}
        catch(err){  return mess.channel.send({embeds: [ new Discord.MessageEmbed({title: "Ошибка!", description: "Вы указали неверный ник \n"}).setThumbnail('https://cdn.discordapp.com/emojis/871344466898853900.gif?v=1').setFooter('*ник должен быть от лицензионого аккаунта Minecraft')]})}
        var embed = new Discord.MessageEmbed({title: `${result1.name}`, description: `${result1.id}`}).setThumbnail(`https://crafatar.com/renders/body/${result1.id}?scale=10`).setColor("RANDOM").addFields({ name: '_ _', value: '_ _' }, { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setTimestamp().setFooter('Челик БОТ', "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp")
        mess.channel.send({embeds: [embed]})})}
    }
