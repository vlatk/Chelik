const Discord = require("discord.js");
const request = require("request")
const ver = require("./ver.json")

exports.name = "help";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
    try{
    interaction.reply({content: "_ _"})
    var token = 'ваш токен'
    request.post({url: `https://discord.com/api/v9/channels/${interaction.channelId}/messages`, headers: {"Authorization": "Bot "+token, "Content-Type": "application/json"},
    body: JSON.stringify({
       // "content": "Hello, World!",
        "tts": false,
        "embeds": [{
          "title": "Список Команд:",
          "description": `**Модерация:**   \`ban, kick, unban\` \n**Веселье:**   \`8ball, coin\` \n**Инфо о боте:**   \`info, chlog, servers\` \n**Инструменты:**   \`clear, say, avatar\` \n**Прочее:**   \`help, lol, invite\` \n**Статистика:**  \`covid, bsstats, gdstats\` \n**Minecraft(лицензия):**  \`hypixel, skin, uuid\` \n
          **[/]Слеш-команды:** \`ping, help, lol, info, chlog, servers, hypixel, invite, bsstats, gdstats, rate\`\n
          *Не работают слеш команды? Тогда перейдите по [ссылке](https://discord.com/api/oauth2/authorize?client_id=726865963424677909&scope=applications.commands) и нажмите "авторизовать".* \n\n`,
          "color": 3066993,
          "thumbnail": {
      "url": "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp?size=256"
    },
    "timestamp": new Date().toISOString(),
    "footer": {
    text: `Челик ${ver.bot_ver}`,
    },
    fields: [
    { name: '\u200B', value: '\u200B' }, 
    { name: 'Чтобы узнать о команде больше', value: `напишите **\`help <команда>\`**, префикс бота: \` ~ \`` , inline: true },
    { name: '_ _', value: `Также, вы можете оставить отзыв о боте 
    на [саппорт-сервере](https://discord.gg/5Qf3m9ywpx) бота, через команду \`~rate <комментарий>\` или на [b.SD.C](https://bots.server-discord.com/726865963424677909) и [Boticord](https://bcord.cc/b/chelik). 
    Спасибо!😁
    
    Вы также можете найти исходный код на нашем [GitHub](https://github.com/vlatk/Chelik)`},
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
               "url": "https://discord.gg/5Qf3m9ywpx",
               "emoji": {
                "id": "799571329048117268",
                "name": "android",
                "animated": false
               }},
               {
             "type": 2,
             "label": "GitHub",
             "style": 5,
             "url": "https://github.com/vlatk/Chelik",
            "emoji": {
              "id": "867104822481649734",
              "name": "github",
              "animated": false
             }},
         {
          "type": 2,
          "label": "💻Наш сайт",
          "style": 5,
          "url": "https://vlatk.webador.com"}
         ]
      }]
          
    })}, (error, response, body) => {
        if(error) console.log(error);
      })
    
    }catch(err){console.log(err)}
}    