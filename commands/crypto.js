const Discord = require("discord.js");
    const request = require("request")
    
exports.name = "crypto";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
var embed =  new Discord.MessageEmbed({title: "Подождите секундочку...", description: ""}).setColor("GREEN")
var embed1 =  new Discord.MessageEmbed({title: "Ошибка!", description: "Вы не указали криптовалюту!"}).setColor("DARK_RED")
var embed2 =  new Discord.MessageEmbed({title: "Ошибка!", description: "Вы не указали временной отрезок!"}).setColor("DARK_RED")
var embed3=  new Discord.MessageEmbed({title: "Ошибка!", description: "Вы не указали валюту конвертации!"}).setColor("DARK_RED")
var embed4 =  new Discord.MessageEmbed({title: "Ошибка!", description: "Слишком быстро! Подождите!"}).setColor("DARK_RED")
var embed5 =  new Discord.MessageEmbed({title: "Ошибка!", description: "Вы указали несуществующую криптовалюту!"}).setColor("DARK_RED")
var embed6 = new Discord.MessageEmbed({title: "Ошибка!", description: "Вы указали несуществующую криптовалюту!"}).setColor("DARK_RED")
var embed7 =  new Discord.MessageEmbed({title: "Ошибка!", description: "Вы указали несуществующую валюту конвертации!"}).setColor("DARK_RED")





    let botmsg = await mess.reply({ embeds: [embed] });
    if(!args[0]) return botmsg.edit({ embeds: [embed1] });
    if(!args[1]) return botmsg.edit({ embeds: [embed2] });
    if(!args[2]) return botmsg.edit({ embeds: [embed3] });
  
    const request = require("request")
    request({url: `https://api.nomics.com/v1/currencies/ticker?key=007475f777b95e7dbc4a7fd5515598ce6d0934a2&ids=${args[0].toUpperCase()}&interval=${args[1]}&convert=${args[2].toUpperCase()}&per-page=100&page=1`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result;
try{
result = JSON.parse(body);
}catch(err){botmsg.edit({ embeds: [embed4] })};

if(result == undefined) return botmsg.edit({ embeds: [embed5] });
      if(result[0] == undefined) return botmsg.edit( { embeds: [embed6] });
      if(result[0].price == 0.00000000) return botmsg.edit({ embeds: [embed7] });

      var days = ''
      if(args[2] == '1d') days = `${result[0]['1d'].volume}`
      if(args[2] == '3d') days = 'Неизвестно'
      if(args[2] == '7d') days = `${result[0]['7d'].volume}`
      if(args[2] == '30d') days = `${result[0]['30d'].volume}`
      if(args[2] == '365d') days = `${result[0]['365d'].volume}`
      if(args[2] == 'ytd') days = `${result[0].ytd.volume}`

      var days2 = ''
      if(args[2] == '1d') days2 = `${Math.round(result[0]['1d'].price_change)}`
      if(args[2] == '3d') days2 = 'Неизвестно'
      if(args[2] == '7d') days2 = `${Math.round(result[0]['7d'].price_change)}`
      if(args[2] == '30d') days2 = `${Math.round(result[0]['30d'].price_change)}`
      if(args[2] == '365d') days2 = `${Math.round(result[0]['365d'].price_change)}`
      if(args[2] == 'ytd') days2 = `${Math.round(result[0].ytd.price_change)}`

      var volume = ''
      if(args[2] == '1d') volume = `${days} ${args[2]}`
      if(args[2] == '3d') volume = 'Неизвестно'
      if(args[2] == '7d') volume = `${days} ${args[2]}`
      if(args[2] == '30d') volume = `${days} ${args[2]}`
      if(args[2] == '365d') volume = `${days} ${args[2]}`
      if(args[2] == 'ytd') volume = `${days} ${args[2]}`

      var price_change = ''
      if(args[2] == '1d') price_change = `${days2} ${args[2]}`
      if(args[2] == '3d') price_change = 'Неизвестно'
      if(args[2] == '7d') price_change = `${days2} ${args[2]}`
      if(args[2] == '30d') price_change = `${days2} ${args[2]}`
      if(args[2] == '365d') price_change = `${days2} ${args[2]}`
      if(args[2] == 'ytd') price_change = `${days2} ${args[2]}`

      var price = result[0].price
      if(Math.round(result[0].price) == 0) price = `${(+price).toFixed(8)} ${args[2]}` 
      if(Math.round(result[0].price) > 0) price = `${(+price).toFixed(2)} ${args[2]}` 

      var max_supply = `${result[0].max_supply} ${args[3]}`
      if(result[0].max_supply == undefined) max_supply = 'Неизвестно'
    

      
      var embed8 = new Discord.MessageEmbed({title: `${result[0].name}`, description: `${result[0].currency}`}).setThumbnail(`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@07fd63a0b662ed99c8ad870ee9227b8ef5e11630/128/color/${result[0].currency.toLowerCase()}.png`).addFields(
        {name: "_ _", value: "_ _"},
        {name: `Цена: ${price}`, value: `**Циркулирующее предложение:** ${result[0].circulating_supply} ${args[2]}
        **Максимальное предложение:** ${max_supply}
        **Рыночная капитализация:** ${result[0].market_cap} ${args[2]}
        **Объем торгов (${args[1]}):** ${volume}
        **Изменение цены (${args[1]}):** ${price_change}
        ━━━━━━━━━━━━━━━━━━━━━━━━━`, inline: true},
        {name: "_Прочее:_", value: `**Пар с монетой:** ${result[0].num_pairs}
        **Неотслеживающиеся пары с монетой:** ${result[0].num_pairs_unmapped}
        **Самая высокая цена за все время:** ${Math.round(result[0].high)} ${args[2]}`},
        { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }
    ).setColor('RANDOM').setTimestamp().setFooter('Челик БОТ', "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp");
    botmsg.edit(embed8)
    
  })}