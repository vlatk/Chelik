
const Discord = require("discord.js");
const request = require("request")
const helplist = require("./help.json");
const ver = require("./ver.json")

exports.name = "help";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
  if(!args[0]) {
  let embed = new Discord.MessageEmbed({title: "Список команд", description: `**К этому сообщению прикреплено
меню выбора категорий выберите 
одну из категорий команд.**
\n
\n
*Также вы можете использовать эту команду 
как \`~help <команда>\` для более подробных 
деталей о команде. Список всех команд в 
категории \"Все команды\"*
\n
**Полезные ссылки:
[Boticord](https://bcord.cc/b/chelik)
[Bots-Discord.com](https://bots.server-discord.com/726865963424677909)
[Саппорт-сервер](https://discord.gg/5Qf3m9ywpx)
[GitHub](https://github.com/vlatk/Chelik)
[Наш сайт](https://vlatk.webador.com)**
\n
*Версия бота ${ver.bot_ver}*
━━━━━━━━━━━━━━━━━━━━`}).setColor("GREEN").setTimestamp().setFooter(`Запросил ${mess.author.tag} • Help`)

  var menu = new Discord.MessageSelectMenu({type: 3, customId: 'help', options: 
  [
  
    {label: 'Модерация', value: 'mod', description: "Команды модерации по типу ban, kick и т.д.", emoji: {name: 'mod', id: '891288003639656460'}}, 
    {label: 'Веселье', value: 'fun', description: "Различные веселые команды по типу 8ball, coin и т.д.", emoji: {name: 'fun', id: '891291854463705108'}},
    {label: 'Инфо о боте', value: 'info', description: "Команды такие как info, rate, chlog и т.д.",emoji: {name: 'info', id: '891291868195880962'}},
    {label: 'Инструменты', value: 'tools', description: "Команды-инструменты по типу clear, avatar и т.д.", emoji: {name: 'tools', id: '891291787849773097'}},
    {label: 'Статистика', value: 'stats', description: "Команды статистики такие как gdstats, covid и т.д.", emoji: {name: 'stats', id: '891291822159200286'}},
    {label: 'Minecraft (Лицензия)', value: 'mc', description: "Команды связанные с игрой Minecraft", emoji: {name: 'mine', id: '875290669734854707'}},
    {label: 'Прочее', value: 'other', description: "Некатегоризированные команды такие как invite, help и т.д.", emoji: {name: 'other', id: '891291843260715038'}},
    {label: 'Все команды', value: 'all', description: "Тупо все команды без сортировки"}

  ], 
  placeholder: 'Выберите категорию'});


mess.channel.send({embeds: [embed], components: [{type:1, components: [menu] }]})};

if(args[0]) {
  var command = helplist.find(obj => obj.name === args[0]);
  if(!command) return mess.reply({ embeds: [embed1] });
  var embed1 = new Discord.MessageEmbed({
    title: `Команда: ~${command.name}`, description:`**Описание:** ${command.description}\n\n**Использование:** ${command.usage}`}
  ).setColor("GREEN");
  
  mess.channel.send({ embeds: [embed1] })}
}

/*request.post({url: `https://discord.com/api/v9/channels/${mess.channel.id}/messages`, headers: {"Authorization": "Bot "+token, "Content-Type": "application/json"},
        body: JSON.stringify({
           // "content": "Hello, World!",
            "tts": false,
            "embeds": [{
              "title": "Список Команд:",
              "description": 
              `**Модерация:**   \`ban, kick, unban\` 
              \n**Веселье:**   \`8ball, coin\` 
              \n**Инфо о боте:**   \`rate, info, chlog, servers\` 
              \n**Инструменты:**   \`clear, say, avatar\` 
              \n**Прочее:**   \`help, lol, invite\` 
              \n**Статистика:**  \`covid, bsstats, gdstats\` 
              \n**Minecraft(лицензия):**  \`hypixel, skin, uuid\` \n
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
              if(!args[0]){ //Добавь эту строку
        
        }else{ //И дальше погнали
        //Пишем здесь ОСТАЛЬНОЕ
        var embed1 =  new Discord.MessageEmbed({title: "Команды:", description: "Такой команды нету!"})
        var command = helplist.find(obj => obj.name === args[0]);
      if(!command) return mess.reply({ embeds: [embed1] });
      var embed = new Discord.MessageEmbed({
        title: `Команда: ${command.name}`, description:`**Описание:** ${command.description}\n\n**Использование:** ${command.usage}`}
      ).setColor("GREEN");
      
      mess.channel.send({ embeds: [embed] });
      } */