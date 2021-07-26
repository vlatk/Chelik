const Discord = require("discord.js");
const request = require("request")

exports.name = "covid";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    var codes = {ru: {code:"217", name:"России:flag_ru:"}, us: {code:"254", name:"Америке:flag_us:"}, kz: {code:"157", name:"Казахстане:flag_kz:"}, ua: {code:"256", name:"Украине:flag_ua:"}, cy: {code:"100", name:"Кипре:flag_cy:"}, tr: {code:"253", name:"Турции:flag_tr:"}};
    var code;
    if(args[0]){
    code = codes[args[0]];
    }
    
    if(code){
    request({url:`https://coronavirus-tracker-api.herokuapp.com/v2/locations/${code.code}`}, (err, res, body) => {
        if(err) return console.error(err);
        var result = JSON.parse(body);
        var desc = `_ _`;
        if(result.location.latest.recovered && result.location.latest.recovered != 0) desc += `${result.location.latest.recovered} человек`;
        var embed = new Discord.MessageEmbed({title: `Статиска заболеваний COVID-19🦠`, description: `в **${code.name}**`}).addFields(
          {name: "_ _", value: "_ _"},
          {name: "🤒Заболело:", value: `_${result.location.latest.confirmed}_ человек`, inline: true},
          {name: "☠Умерло:", value: `_${result.location.latest.deaths}_ человек`, inline: true},
          {name: "💚Вылечено:", value: `_${desc}_`},
          {name: "_ _", value: "_ _"},
          { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }
      ).setColor('RED').setTimestamp().setFooter('Челик БОТ', "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp");
        mess.channel.send(embed)
      });
    
    }else if(!args[0]){
    url = 
    request({url:"https://coronavirus-tracker-api.herokuapp.com/v2/locations"}, (err, res, body) => {
        if(err) return console.error(err);
        var result = JSON.parse(body)
        var embed = new Discord.MessageEmbed({title: `Статиска заболеваний COVID-19🦠`, description: `в **мире🌍**`}).addFields(
          {name: "_ _", value: "_ _"},
          {name: "🤒Заболело:", value: `_${result.latest.confirmed}_ человек`, inline: true},
          {name: "☠Умерло:", value: `_${result.latest.deaths}_ человек`, inline: true},
          {name: "💚Вылечено:", value: `_${result.latest.recovered}_`},
          {name: "_ _", value: "_ _"},
          { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }
      ).setColor('RED').setTimestamp().setFooter('Челик БОТ', "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp");
        mess.channel.send(embed)
      });
    }else{
    mess.channel.send(new Discord.MessageEmbed({title: 'Статиска заболеваний COVID-19🦠', description: 'Неизвестая страна для просмотра статистики😕'}).setColor('DARK_RED').addFields({name: "_ _", value: "_ _"}, {name: 'Попробуйте:', value: '\`~help covid\`'}, {name: "_ _", value: "_ _"}, { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setFooter('Челик БОТ', "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp"));
    }
}