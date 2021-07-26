
const Discord = require("discord.js");
const request = require("request")
const helplist = require("./help.json");

exports.name = "help";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    if(!args[0]){ //Добавь эту строку
        var token = 'your token from https://developers.discord.com/your_project_id/bot'
        request.post({url: `https://discord.com/api/v9/channels/${mess.channel.id}/messages`, headers: {"Authorization": "Bot "+token, "Content-Type": "application/json"},
        body: JSON.stringify({
           // "content": "Hello, World!",
            "tts": false,
            "embeds": [{
              "title": "Список Команд:",
              "description": `**Модерация:**   \`ban, kick, unban\` \n**Веселье:**   \`8ball, oir\` \n**Инфо о боте:**   \`info, chlog, servers\` \n**Инструменты:**   \`clear, say, avatar\` \n**Прочее:**   \`help, hello, invite, test\` \n**Статистика:**  \`covid, bsstats, gdstats\` \n\n`,
              "color": 3066993,
              "thumbnail": {
          "url": "ава вашего бота"
        },
        "timestamp": new Date().toISOString(),
        "footer": {
        text: "Челик V1.5a",
        },
        fields: [
        { name: '\u200B', value: '\u200B' }, 
        { name: 'Чтобы узнать о команде больше', value: `напишите **\`help <команда>\`**, префикс бота: \` ~ \`` , inline: true },
        { name: '_ _', value: `Также, вы можете оставить отзыв о боте 
        на [саппорт-сервере](https://discord.gg/ваш_саппорт_сервер) бота или на [b.SD.C](url вашего бота на сайте https://bots.server-discord.com/). 
        Спасибо!😁
        
        Вы также можете найти исходный код на нашем [GitHub](https://github.com/вы/ваш_бот)`},
        { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }
      
        ]
        
            }],
        
            "components": [{
                "type": 1,
               "components": [
                   {
                   "type": 2,
                   "label": "Саппорт-сервер",
                   "style": 5,
                   "url": "https://discord.gg/ваш_саппорт_серв",
                   "emoji": {//ваше эмодзи
                    "id": "799571329048117268",
                    "name": "android",
                    "animated": false
                   }},
                   {
                 "type": 2,
                 "label": "GitHub",
                 "style": 5,
                 "url": "https://github.com/вы/ваш_проект",
                "emoji": { //ваше эмодзи
                  "id": "867104822481649734",
                  "name": "github",
                  "animated": false
                 }},
             {
              "type": 2,
              "label": "b.SD.c",
              "style": 5,
              "url": "url вашего бота на сайте https://bots.server-discord.com/",
              "emoji": {//ваше эмодзи
               "id": "863378474327867402",
               "name": "bsdc",
               "animated": false
             }}
             ]
          }]
              
        })}, (error, response, body) => {
            if(error) console.log(error);
          })
        }else{ //И дальше погнали
        //Пишем здесь ОСТАЛЬНОЕ
        var command = helplist.find(obj => obj.name === args[0]);
      if(!command) return mess.reply( new Discord.MessageEmbed({title: "Команды:", description: "Такой команды нету!"}));
      var embed = new Discord.MessageEmbed({
        title: `Команда: ${command.name}`, description:`**Описание:** ${command.description}\n\n**Использование:** ${command.usage}`}
      ).setColor("GREEN");
      
      mess.channel.send(embed);
      }
}