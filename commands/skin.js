const Discord = require("discord.js");
    const request = require("request")
    
exports.name = "skin";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    if(!args[0]){ let botmsg = await mess.channel.send({embeds: [new Discord.MessageEmbed({title: 'Ошибка!', description: 'Введите ник игрока!'}).setThumbnail('https://cdn.discordapp.com/emojis/871344466898853900.gif?v=1').setFooter('Это сообщение удалиться через 5 секунд.')]})
    setTimeout(function(){
        botmsg.delete()
      }, 5000)};

if(args[0]){request({url: `https://api.mojang.com/users/profiles/minecraft/${args[0]}`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
try{
        var result1 = JSON.parse(body);}
        catch(err){  return mess.channel.send({embeds: [new Discord.MessageEmbed({title: "Ошибка!", description: "Вы указали неверный ник \n"}).setThumbnail('https://cdn.discordapp.com/emojis/871344466898853900.gif?v=1').setFooter('*ник должен быть от лицензионого аккаунта Minecraft')]})}
        var embed = new Discord.MessageEmbed({title: `Скин игрока`, description: ``}).setThumbnail(`https://crafatar.com/renders/body/${result1.id}?scale=10`).setImage(`https://crafatar.com/skins/${result1.id}?size=512`).setColor("RANDOM").setFooter(`${result1.name} • ${result1.id}`)
        mess.channel.send({embeds: [embed]})})}}