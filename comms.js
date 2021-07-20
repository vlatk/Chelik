const config = require('./config.json');
const request = require("request")
const Discord = require('discord.js');
const helplist = require("./help.json");
const prefix = config.prefix;
const versions = config.versions;


// Команды //

function test(robot, mess, args) {
  var text = 'Тест!'
  var embed = new Discord.MessageEmbed({title: text, description: 'Это команда тест!'}).setColor("RANDOM");
  mess.channel.send(embed);
} 


function hello(robot, mess, args) {
  var text = 'Приветики'
  var embed = new Discord.MessageEmbed({title: text, description: 'привет))'}).setColor("BLUE");
  mess.channel.send(embed);
} 

function invite(robot, mess, args) {
  var text = `**[>> клик сюды <<](https://discord.com/oauth2/authorize?client_id=726865963424677909&scope=bot&permissions=8)**`
  var embed = new Discord.MessageEmbed({title: 'Пригласите Челика к себе!', description: text}).setColor("GREEN");
  mess.channel.send(embed);
} 



function clear(robot, mess, args){
const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
const amount = args.slice(1).join(" "); // Количество сообщений, которые должны быть удалены
if (!amount) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Вы не указали сколько сообщений нужно удалить!'}).setColor("RED")); // Проверка, задан ли параметр количества
if (isNaN(amount)) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Вы должны указать число!'}).setColor("RED")); // Проверка, является ли числом ввод пользователя 

if (amount > 100) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Вы не можете удалить более 100 сообщений за раз'}).setColor("RED")); // Проверка, является ли ввод пользователя числом больше 100
if (amount < 1) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Кол-во сообщений не может быть меньше чем 1'}).setColor("RED")); // Проверка, является ли ввод пользователя числом меньше 1

if (!mess.channel.permissionsFor(mess.guild.me).has("MANAGE_MESSAGES") && !mess.channel.permissionsFor(mess.guild.me).has("MANAGE_MESSAGES")) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'У меня недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));
if (!mess.channel.permissionsFor(mess.member).has("MANAGE_MESSAGES") && !mess.channel.permissionsFor(mess.member).has("MANAGE_MESSAGES")) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'У вас недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));

async function delete_messages() { // Объявление асинхронной функции

    await mess.channel.messages.fetch({
        limit: amount
    }).then(messages => {
        mess.channel.bulkDelete(messages)
        mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: `Успешно удалено ${amount} сообщений!`}).setColor("GREEN"));
    })
};
mess.delete().catch();

delete_messages(); // Вызов асинхронной функции
}

function say(robot, mess, args){
args = mess.content.split(` `);
args.shift();
args = args.join(` `);

mess.delete().catch(); // Удаление сообщения пользователя после отправки 

mess.channel.send(args, {disableMentions: "everyone"});
}

function oir(robot, mess, args){

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
  var embed = new Discord.MessageEmbed({title: "Монетка подбрасывается...", description: `**${text}**`}).setColor("DARK_BUT_NOT_BLACK").setTimestamp().setFooter(mess.author.tag, mess.author.displayAvatarURL());
  
  mess.channel.send(embed);
  }  

function _8ball(robot, mess, args) {

var answers = ["Наверно...", "Не думаю(", "Нет, нет и еще раз нет!", "Ответ не из лучших...", "Не надейся :wink:", "Возможно да, а может нет ¯\\_(ツ)_/¯", "Определенно да!", "Я думаю да...", "Угу", "Конечно же!"] //и тд
var answer = answers[Math.floor(Math.random() * answers.length)];

var embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Шар предсказаний:')
.setDescription(`<:special8ball:860147244812075018> ${answer} <:special8ball:860147244812075018> `)
.setTimestamp()
.setFooter(mess.author.tag, mess.author.displayAvatarURL());
mess.channel.send(embed)
}

function help(robot, mess, args) {
  if(!args[1]){ //Добавь эту строку
  const request = require("request")
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
    "url": "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp?size=256"
  },
  "timestamp": new Date().toISOString(),
  "footer": {
  text: "Челик V1.5a",
  },
  fields: [
  { name: '\u200B', value: '\u200B' }, 
  { name: 'Чтобы узнать о команде больше', value: `напишите **\`help <команда>\`**, префикс бота: \` ~ \`` , inline: true },
  { name: '_ _', value: `Также, вы можете оставить отзыв о боте 
  на [саппорт-сервере](https://discord.gg/5Qf3m9ywpx) бота или на [b.SD.C](https://bots.server-discord.com/726865963424677909). 
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
        "label": "b.SD.c",
        "style": 5,
        "url": "https://bots.server-discord.com/726865963424677909",
        "emoji": {
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
  var command = helplist.find(obj => obj.name === args[1]);
if(!command) return mess.reply( new Discord.MessageEmbed({title: "Команды:", description: "Такой команды нету!"}));
var embed = new Discord.MessageEmbed({
  title: `Команда: ${command.name}`, description:`**Описание:** ${command.description}\n\n**Использование:** ${command.usage}`}
).setColor("GREEN");

mess.channel.send(embed);
}
}


function ban (robot, mess, args) {
  args = mess.content.split(` `);
  args.shift();
  args = args.join(` `);
  var reason = args.split(' ').slice(1).join(" ")
  if(!reason) reason = "none"; 

  if (!mess.channel.permissionsFor(mess.guild.me).has("BAN_MEMBERS") && !mess.channel.permissionsFor(mess.guild.me).has("BAN_MEMBERS")) return mess.channel.send(new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У меня недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));
  if (!mess.channel.permissionsFor(mess.member).has("BAN_MEMBERS") && !mess.channel.permissionsFor(mess.member).has("BAN_MEMBERS")) return mess.channel.send(new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У вас недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));
    const user = mess.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = mess.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: `${reason}`,
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            mess.channel.send(new Discord.MessageEmbed()
            .setColor('DARK_RED')
            .setTitle('Модерация⚖')
            .setDescription(`***<@${user.id}>*** успешно забанен!`)
            .addFields(
              { name: '\u200B', value: '\u200B' },
              { name: 'Причина:', value: `${reason}` , inline: true },
            )
            .setTimestamp()
            .setFooter(mess.author.tag, mess.author.displayAvatarURL()));
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            mess.reply(new Discord.MessageEmbed({title: 'Модерация⚖', description: `У меня недостаточно прав!`}).setColor("RED"));
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        mess.reply(new Discord.MessageEmbed({title: 'Модерация⚖', description: `Этот человек не с этого сервера!`}).setColor("RED"));
      }
    } else {
      // Otherwise, if no user was mentioned
      mess.reply(new Discord.MessageEmbed({title: 'Модерация⚖', description: `Вы не указали кого забанить!`}).setColor("RED"));
    }
}

function kick(robot, mess, args) {
  args = mess.content.split(` `);
  args.shift();
  args = args.join(` `);
  var reason = args.split(' ').slice(1).join(" ")
  if(!reason) reason = "none";  
  if (!mess.channel.permissionsFor(mess.guild.me).has("KICK_MEMBERS") && !mess.channel.permissionsFor(mess.guild.me).has("KICK_MEMBERS")) return mess.channel.send(new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У меня недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));
  if (!mess.channel.permissionsFor(mess.member).has("KICK_MEMBERS") && !mess.channel.permissionsFor(mess.member).has("KICK_MEMBERS")) return mess.channel.send(new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У вас недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));

  const user = mess.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = mess.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick(`${reason}`)
          .then(() => {
            // We let the message author know we were able to kick the person
            mess.channel.send(new Discord.MessageEmbed()
            .setColor('DARK_RED')
            .setTitle('Модерация⚖')
            .setDescription(`***<@${user.id}>*** успешно кикнут!`)
            .addFields(
              { name: '\u200B', value: '\u200B' },
              { name: 'Причина:', value: `${reason}` , inline: true },
            )
            .setTimestamp()
            .setFooter(mess.author.tag, mess.author.displayAvatarURL()));
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            mess.reply(new Discord.MessageEmbed({title: 'Модерация⚖', description: `У меня недостаточно прав!`}).setColor("RED"));
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        mess.reply(new Discord.MessageEmbed({title: 'Модерация⚖', description: `Этот человек не с этого сервера!`}).setColor("RED"));
      }
      // Otherwise, if no user was mentioned
    } else {
      mess.reply(new Discord.MessageEmbed({title: 'Модерация⚖', description: `Вы не указали кого кикнуть!`}).setColor("RED"));
    }
}


function avatar(robot, mess, args) {
  let user = mess.mentions.users.first()
  if(!user){
      user = mess.author;
  }
mess.channel.send( new Discord.MessageEmbed({title: ``, description: `**<@${user.id}> аватар:**`}).setImage(`${user.displayAvatarURL({size: 1024, dynamic: true})}`).setColor("RANDOM"))
};

function unban(robot, mess, args) {
  args = mess.content.split(` `);
  args.shift();
  args = args.join(` `);

  if (!mess.channel.permissionsFor(mess.guild.me).has("BAN_MEMBERS") && !mess.channel.permissionsFor(mess.guild.me).has("BAN_MEMBERS")) return mess.channel.send(new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У меня недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));
  if (!mess.channel.permissionsFor(mess.member).has("BAN_MEMBERS") && !mess.channel.permissionsFor(mess.member).has("BAN_MEMBERS")) return mess.channel.send(new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У вас недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));
  mess.guild.members.unban(`${args}`)
        .then(() => {
            // We let the message author know we were able to ban the person
            mess.channel.send(new Discord.MessageEmbed()
            .setColor('DARK_RED')
            .setTitle('Модерация⚖')
            .setDescription(`***<@${args}>*** успешно разбанен!`)
            .addFields(
              { name: '\u200B', value: '\u200B' }
            )
            .setTimestamp()
            .setFooter(mess.author.tag, mess.author.displayAvatarURL()));
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            mess.reply(new Discord.MessageEmbed({title: 'Модерация⚖', description: `Вы должны указать ID того, кого вернуть из бана!`}).setColor("RED"));
            // Log the error
            console.error(err);
          });
};

function btest(robot,mess,args){
var embed = new Discord.MessageEmbed({title: 'meow',description: 'test'}.setColor(RED)) 
  var msg = new Discord.APIMessage().create(mess.channel, undefined, {embed: embed, components: [{
    "type": 1,
   "components": [
       {
           "type": 2,
           "label": "Саппорт-сервер",
           "style": 5,
           "url": "https://discord.gg/UxKyysx4Md"
       }
   ]
}]}).create(mess.channel)};

function chlog(robot,mess,args){
 var embed = new Discord.MessageEmbed({title: "Чейнджлог Версии V1.5a", description: "Итак! Что же нового в этой версии? \n\n Это обновление довольно маленькое. \n\n Добавлена команда \`~gdstats\`. Подробно \`~help gdstats\`"}).addFields(
  { name: '\u200B', value: '\u200B' }, 
  { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setColor("GREEN").setTimestamp().setFooter("Челик БОТ | V1.5a", 'https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp');
mess.channel.send(embed)
}


function _info(robot,mess,args){
  var embed = new Discord.MessageEmbed({title: "Челик это - легкий и простой бот со скромным списком команд.", description: `Челик, это мой первый бот. Этого бот я не хочу делать слишком сложным и нагруженным. Мой бот подходит для простых задач. Бот имеет скромное количество команд. \n
  Бан, анбан, кик. Это модерация\n
  Из веселья у нас - Орел и решка и 8балл шар. Да, скромно.\n
  У нас также есть инструменты по типу - clear, avatar и say(говорить от имени бота).\n
~~~NEW~~~\n
Теперь в боте есть статистика! Узнайте количество заболевших и умерший COVID-19 во всем мире или некоторых регионах с помощью ~covid, а также узнайте стату своего аккаунта или аккаунта вашего друга в игре Geometry Dash и/или BrawlStars с помощью ~bsstats и/или ~gdstats Подробно об этих командах в ~help\n
  Нууууу.....\n
  Похоже что это все ¯\_(ツ)_/¯ \n`}).setThumbnail("https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp").addFields(
    { name: '\u200B', value: '\u200B' }, 
    { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setColor("GREEN").setTimestamp().setFooter("Челик БОТ | V1.5a", 'https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp');
mess.channel.send(embed)
}

function servers(robot,mess,args){
  mess.channel.send(new Discord.MessageEmbed({title: "Cервера Челика:", description: `<@726865963424677909> находиться на **${robot.guilds.cache.size}** серверах!`}).setColor("RANDOM").addFields({name: '\n\n_ _', value: '_ _', inline: false}, {name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬', value: '_ _', inline: true}).setTimestamp().setFooter("Челик БОТ", 'https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp'));
}

function covid(robot, mess, args){
  var codes = {ru: {code:"217", name:"России:flag_ru:"}, us: {code:"254", name:"Америке:flag_us:"}, kz: {code:"157", name:"Казахстане:flag_kz:"}, ua: {code:"256", name:"Украине:flag_ua:"}, cy: {code:"100", name:"Кипре:flag_cy:"}, tr: {code:"253", name:"Турции:flag_tr:"}};
  var code;
  if(args[1]){
  code = codes[args[1]];
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
  
  }else if(!args[1]){
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

async function bsstats(robot, mess, args) {
  let botmsg = await mess.reply( new Discord.MessageEmbed({title: "Подождите секундочку...", description: "Мы получаем информацию с серверов Brawl Stars. Это займет от 2 до 5 секунд. Пожалуйста подождите"}).setColor("GREEN"));
  if(!args) return botmsg.edit( new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: "Выбрите \`player/club\` и введи тег игрока/клуба."}).setColor("DARK_RED"));
  const request = require("request")
  switch(args[1]) {
  case 'player':
  request({url: `https://api.brawlstars.com/v1/players/%23${args[2].replace(/[^a-zа-яё0-9]/gi, '')}/battlelog`, headers: {"Authorization": "your bearer token from https://developer.brawlstars.com/#/", "Content-Type": "application/json"}}, (err, res, body) => {
    if(err) return console.error(err);
    var result1 = JSON.parse(body);
    if(result1.reason) return botmsg.edit( new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: "Проверьте правильность написания тега."}).setColor("DARK_RED"));
    var battlemap = (result1.items[0].event.map);
    if(result1.items[0].event.map == null) battlemap = "Пользовательская карта";

        var battlemode = (result1.items[0].battle.mode);
    if(result1.items[0].battle.mode == "heist") battlemode = "Ограбление";
    if(result1.items[0].battle.mode == "gemGrab") battlemode = "Захват кристаллов";
    if(result1.items[0].battle.mode == "bounty") battlemode = "Награда за поиму";
    if(result1.items[0].battle.mode == "hotZone") battlemode = "Горячая зона";
    if(result1.items[0].battle.mode == "brawlBall") battlemode = "Броул бол";
    if(result1.items[0].battle.mode == "holdTheTrophy") battlemode = "Удержи трофей";
    if(result1.items[0].battle.mode == "siege") battlemode = "Осада";
    if(result1.items[0].battle.mode == "soloShowdown") battlemode = "Одиночное столкновение";
    if(result1.items[0].battle.mode == "duoShowdown") battlemode = "Парное столкновение";
    if(result1.items[0].battle.mode == "knockout") battlemode = "Нокаут";
    if(result1.items[0].battle.mode == "bossFight") battlemode = "Бой с боссом";
    if(result1.items[0].battle.mode == "bigGame") battlemode = "Большая игра";
    if(result1.items[0].battle.mode == "roborumble") battlemode = "Роборубка";
    if(battlemap == 'SUPER CITY') battlemode = "Разгром супер сити";
    if(result1.items[0].battle.mode == "volleyBrawl") battlemode = "Волейбой";
    if(result1.items[0].battle.mode == "trophyThieves") battlemode = "Похитители трофеев";

    var battleresult = (result1.items[0].battle.result);
    if(result1.items[0].battle.result == "victory") battleresult = "Победа";
    if(result1.items[0].battle.result == "defeat") battleresult = "Поражение";
    if(result1.items[0].battle.result == "draw") battleresult = "Ничья";
    if(result1.items[0].battle.result == undefined) battleresult = "Неизвестно";

    var battletype = (result1.items[0].battle.type);
    if(result1.items[0].battle.type == "ranked") battletype = "Ранговый бой";
    if(result1.items[0].battle.type == "soloRanked") battletype = "Одиночный ранговый бой (Силовая лига)";
    if(result1.items[0].battle.type == "teamRanked") battletype = "Командный ранговый бой (Силовая лига)";
    if(result1.items[0].battle.type == "friendly") battletype = "Дружеский бой";
    if(result1.items[0].battle.type == "challenge") battletype = "Испытание";
    if(result1.items[0].battle.type == undefined) battletype = "Особое событие";

  request({url: `https://api.brawlstars.com/v1/players/%23${args[2].replace(/[^a-zа-яё0-9]/gi, '')}`, headers: {"Authorization": "your bearer token from https://developer.brawlstars.com/#/", "Content-Type": "application/json"}}, (err, res, body) => {
    if(err) return console.error(err);
    var result = JSON.parse(body);
    var roborub = "0";
    if(result.bestRoboRumbleTime == 1) roborub = "Нормально";
if(result.bestRoboRumbleTime == 2) roborub = "Сложно";
if(result.bestRoboRumbleTime == 3) roborub = "Эксперт";
if(result.bestRoboRumbleTime == 4) roborub = "Мастер";
if(result.bestRoboRumbleTime == 5) roborub = "Безумие";
if(result.bestRoboRumbleTime == 6) roborub = "Безумие II";
if(result.bestRoboRumbleTime == 7) roborub = "Безумие III";
if(result.bestRoboRumbleTime == 8) roborub = "Безумие IV";
if(result.bestRoboRumbleTime == 9) roborub = "Безумие V";
if(result.bestRoboRumbleTime == 10) roborub = "Безумие VI";
if(result.bestRoboRumbleTime == 11) roborub = "Безумие VII";
if(result.bestRoboRumbleTime == 12) roborub = "Безумие VIII";
if(result.bestRoboRumbleTime == 13) roborub = "Безумие IX";
if(result.bestRoboRumbleTime == 14) roborub = "Безумие X";

    var emoji = "";
if(result.trophies>0) emoji = "<:0k:863854863649210368>";
if(result.trophies>1000) emoji = "<:1k:863854874050953296>";
if(result.trophies>2000) emoji = "<:2k:863854883958685747>";
if(result.trophies>3000) emoji = "<:3k:863854690005155860>";
if(result.trophies>4000) emoji = "<:4k:863854701162004521>";
if(result.trophies>6000) emoji = "<:6k:863854721588789318>";
if(result.trophies>8000) emoji = "<:8k:863854734917369866>";
if(result.trophies>10000) emoji = "<:10k:863854750926372874>";
if(result.trophies>16000) emoji = "<:16k:863854764272910376>";
if(result.trophies>30000) emoji = "<:30k:863854777251528774>";
if(result.trophies>50000) emoji = "<:50k:863854788487675974>";

var club = '<:club:863792251447279647> Имя клуба:';
if(result.club.name == undefined) club = '<:noclub:863791314788024351> Имя клуба:';

var type = '**Тип боя:**';
if(battletype == 'Одиночный ранговый бой (Силовая лига)') type = '<:powerleague:863801243821539338> **Тип боя:**';
if(battletype == 'Командный ранговый бой (Силовая лига)') type = '<:powerleague:863801243821539338> **Тип боя:**';
if(battletype == 'Дружеский бой') type = '<:friendlygame:863809473646690304> **Тип боя:**';
if(battletype == 'Ранговый бой') type = '<:trophyyy:863810231322542141> **Тип боя:**';
if(battletype == 'Особое событие') type = '<:bossfight:863797514146545715> **Тип боя:**';
if(battletype == 'Испытание') type = '<:challenge:864017779769606184> **Тип боя:**';

var mode = ''
    if(battlemode == 'Ограбление') mode = '<:heist:863796193636122654> **Режим:**';
    if(battlemode == 'Захват кристаллов') mode = '<:gemgrab:863796099097165874> **Режим:**';
    if(battlemode == 'Награда за поиму') mode = '<:bounty:863796179471826985> **Режим:**';
    if(battlemode == 'Горячая зона') mode = '<:hotzone:863797481044705300> **Режим:**';
    if(battlemode == 'Броул бол') mode = '<:brawlball:863796136199847946> **Режим:**';
    if(battlemode == 'Удержи трофей') mode = '<:holdthetrophy:863796150544498689> **Режим:**';
    if(battlemode == 'Осада') mode = '<:siege:863796114029412363> **Режим:**';
    if(battlemode == 'Одиночное столкновение') mode = '<:solo:863673089724252160> **Режим:**';
    if(battlemode == 'Парное столкновение') mode = '<:duo:863673070577516565> **Режим:**';
    if(battlemode == 'Нокаут') mode = '<:knockout:863797493283028992> **Режим:**';
    if(battlemode == 'Бой с боссом') mode = '<:bossfight:863797514146545715> **Режим:**';
    if(battlemode == 'Большая игра') mode = '<:biggame:863797504369885264> **Режим:**';
    if(battlemode == 'Роборубка') mode = '<:roborumble:863673102587002890> **Режим:**';
    if(battlemode == 'Разгром супер сити') mode = "<:rampage:863814096063561788> **Режим:**";
    if(battlemode == 'Волейбой') mode = "<:volleybrawl:864084739718905907> **Режим:**";
    if(battlemode == 'Похитители трофеев') mode = "<:trophythieves:866595105041154048> **Режим:**";

var res = ''
if(battleresult == 'Победа') res = '<a:win:863804751752855562> **Результат:**';
if(battleresult == 'Поражение') res = '<a:lose:863804794170245121> **Результат:**';
if(battleresult == 'Ничья') res = ':vs: **Результат:**';
if(battleresult == 'Неизвестно') res = ':grey_question: **Результат:**';

var clubname = (result.club.name);
if(result.club.name == undefined) clubname = 'Не состоит в клубе';
var clubtag = (result.club.tag);
if(result.club.tag == undefined) clubtag = '#000000000';
    if(result.reason) return botmsg.edit( new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: "Проверьте правильность написания тега."}).setColor(`${result.nameColor}`));
    var embed = new Discord.MessageEmbed({title: `Статистика игрока в Brawl Stars`, description: `_ _`}).setThumbnail(`https://cdn.brawlify.com/profile/${result.icon.id}.png`).addFields(
      {name: "_ _", value: "_ _"},
      {name: "_Основная информация_", value: `<:account:863860550072401931> **Имя:** \`${result.name}\`
      <:id:863854022963101737> **Тег:** \`${result.tag}\`
      <:trophie:863673040930734089> **Трофеи:** \`${result.trophies}\`
      <:level:863791324343173141> **Уровень опыта:** \`${result.expLevel}\`
      <:trophyroad:863804170996678707> **Звание на пути к славе:** ${emoji}
      ━━━━━━━━━━━━━━━━━━━━━━━━━`, inline: true},
      {name: "_Статистика побед_", value: `<:3vs3:863673052276457483> **Побед 3 на 3:** \`${result["3vs3Victories"]}\`
      <:solo:863673089724252160> **Побед соло шд:** \`${result.soloVictories}\`
      <:duo:863673070577516565> **Побед дуо шд:** \`${result.duoVictories}\`
      ━━━━━━━━━━━━━━━━━━━━━━━━━`},
      {name: "_Последний бой_", value: `${mode} \`${battlemode}\`
      <:mapmaker:863804159454478366> **Карта:** \`${battlemap}\`
      ${res} \`${battleresult}\`
      ${type} \`${battletype}\`
      ━━━━━━━━━━━━━━━━━━━━━━━━━`},
      {name: "_Клуб_", value: `**${club}** \`${clubname}\`
      <:id:863854022963101737> **Тег клуба: ** \`${clubtag}\`
      ━━━━━━━━━━━━━━━━━━━━━━━━━`},
      {name: "_Дополнительная информация_", value: `<:xp:863673029128093696> **Очков опыта:** \`${result.expPoints}\`
      <:best_trophy:863791333131157514> **Лучшее число трофеев:** \`${result.highestTrophies}\`
      <:roborumble:863673102587002890> **Лучший уровень роборубки:** \`${roborub}\``},
      {name: "_ _", value: "_ _"},
      { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }
  ).setColor('RANDOM').setTimestamp().setFooter('Челик БОТ', "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp");
   botmsg.edit(embed)
})})
   break;
case 'club':
  request({url: `https://api.brawlstars.com/v1/clubs/%23${args[2].replace(/[^a-zа-яё0-9]/gi, '')}`, headers: {"Authorization": "your bearer token from https://developer.brawlstars.com/#/", "Content-Type": "application/json"}}, (err, res, body) => {
    if(err) return console.error(err);
    var result2 = JSON.parse(body);
    if(result2.reason) return botmsg.edit( new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: "Проверьте правильность написания тега."}).setColor("DARK_RED"));
    var clubb = ''
    if(result2.type == 'open') clubb = 'Открытый'
    if(result2.type == 'closed') clubb = 'Закрытый'
    if(result2.type == 'inviteOnly') clubb = 'Только по приглашению'

   var fdgd = result2.description
   if(result2.description == undefined) fdgd = "_Отсутствует_";

   var typee = ''
   if(result2.type == 'open') typee = '<a:win:863804751752855562> **Тип клуба:**'
   if(result2.type == 'closed') typee = '<a:lose:863804794170245121> **Тип клуба:**'
   if(result2.type == 'inviteOnly') typee = '<:level:863791324343173141> **Тип клуба:**'

   
    var embed = new Discord.MessageEmbed({title: `Статистика клуба в Brawl Stars`, description: `_ _`}).setThumbnail(`https://cdn.brawlify.com/club/${result2.badgeId}.png`).addFields(
      {name: "_ _", value: "_ _"},
      {name: "_Основная информация_", value: `<:account:863860550072401931> **Имя:** \`${result2.name}\`
      <:id:863854022963101737> **Тег:** \`${result2.tag}\`
      <:trophie:863673040930734089> **Трофеи:** \`${result2.trophies}\`
      <:trophyyy:863810231322542141> **Необходимо трофеев для входа:** \`${result2.requiredTrophies}\`
      ${typee} \`${clubb}\`
      ━━━━━━━━━━━━━━━━━━━━━━━━━`, inline: true},
      {name: "_Описание клуба:_", value: `\n\n ${fdgd.replace(/<\/?[^>]+>/g,'')}`},
      //━━━━━━━━━━━━━━━━━━━━━━━━━`},
      //{name: "_Президент клуба:_", value: `<:account:863860550072401931> **Имя:** \`\`
      //<:id:863854022963101737> **Тег:** \`\`
      //**Подробнее:** \`~bsstats player \` (не забудьте убрать # из тега)
      //`},
      {name: "_ _", value: "_ _"},
      { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }
  ).setColor('RANDOM').setTimestamp().setFooter('Челик БОТ', "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp");
   botmsg.edit(embed)
})
   break;
  default: 
  botmsg.edit( new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: `Неправильное использование команды! \n Использование: \n
  \`~bsstats player <тег без #>\`
  \`~bsstats club <тег без #>\``}).setColor("DARK_RED"));
  }}


  async function gdstats(robot,mess,args){
    let botmsg = await mess.reply( new Discord.MessageEmbed({title: "Подождите секундочку...", description: "Мы получаем информацию с серверов Geometry Dash. Это займет пару секунд"}).setColor("GREEN"));
    if(!args) return botmsg.edit( new Discord.MessageEmbed({title: "Статистика Geometry Dash", description: "Выберите \`player/level\` и введите айди или имя игрока/айди уровня."}).setColor("DARK_RED"));
    const request = require("request")
    switch(args[1]){
   case 'player':
    
    request({url: `https://gdbrowser.com/api/profile/${args[2]}`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result = JSON.parse(body);
      if(result == -1) return botmsg.edit( new Discord.MessageEmbed({title: "Статистика Geometry Dash", description: "Проверьте правильность написания имени или ID профиля"}).setColor("DARK_RED"));
      
      var mod = 'Неизвестно'
      if(result.moderator == 0) mod = "\`Нет\`";
      if(result.moderator == 1) mod = "\`Да\`";
      if(result.moderator == 2) mod = "\`Да, старший модератор\`";
  
      var moddd = ''
      if(result.moderator == 0) moddd = "<:void:863803473460068402> **Имя:**";
      if(result.moderator == 1) moddd = "<:mod:864102322388729866> **Имя:**";
      if(result.moderator == 2) moddd = "<:elder:864102336095191081> **Имя:**";
  
      var modd = '**Модератор?:**'
      if(result.moderator == 0) modd = '<a:lose:863804794170245121> **Модератор?:**';
      if(result.moderator == 1) modd = '<a:win:863804751752855562> **Модератор?:**';
      if(result.moderator == 2) modd = '<a:win:863804751752855562> **Модератор?:**';
  
      var yt = `[>> нажмите <<](https://www.youtube.com/channel/${result.youtube})`;
      if(result.youtube == null) yt = '\`Отсутствует\`';
  
      var twt = `[${result.twitter}](https://twitter.com/${result.twitter})`;
      if(result.twitter == null) twt = '\`Отсутствует\`';
  
      var twh = `[${result.twitch}](https://www.twitch.tv/${result.twitch})`
      if(result.twitch == null) twh = '\`Отсутствует\`';
  
      var embed = new Discord.MessageEmbed({title: "Статистика игрока Geometry Dash", description: ""}).setThumbnail(`https://gdbrowser.com/icon/${result.username}`).setColor('RANDOM').addFields(
        {name: "_ _", value: "_ _"},
        {name: "_Основная информация_", value: ` ${moddd} \`${result.username}\`
        <:account1:864101258079502356>**Айди:** \`${result.accountID}\`
        <:rank:864100767370838026> **Глобальный ранг:** \`${result.rank}\`
        <:demon:864098449708548126> **Пройденых демонов:** \`${result.demons}\`
        <:cp:864102350377451532> **Очки креаторства:** \`${result.cp}\`
        ${modd} ${mod}`},
        {name: "_Монеты, звезды и т.д._", value: `<:diamond:864097606836813845> **Алмазов:** \`${result.diamonds}\`
        <:star:864097769794174986> **Звезд:** \`${result.stars}\`
        <:secretcoin:864098414425014284> **Секретных монет:** \`${result.coins}\`
        <:usercoin:864098434293825566> **Пользовательских монет:** \`${result.userCoins}\``},
        {name: `_Соц.Сети_`, value: `<:youtube:864112899140091934> **YouTube:** ${yt}
        <:twitter:864112607053348884> **Twitter:** ${twt}
        <:twitch:864112632835211274> **Twitch:** ${twh}`},
        {name: "_ _", value: "_ _"},
        { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }
      ).setTimestamp().setFooter('Челик БОТ', "https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp")
      botmsg.edit(embed)
  });
  break;
  case 'level':
    request({url: `https://gdbrowser.com/api/level/${args[2]}`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result = JSON.parse(body);
      if(result == -1) return botmsg.edit( new Discord.MessageEmbed({title: "Статистика Geometry Dash", description: "Проверьте правильность написания ID уровня"}).setColor("DARK_RED"));
      request({url: `https://gdbrowser.com/api/profile/${result.accountID}`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result1 = JSON.parse(body);
      
      var long = ''
      if(result.length == 'Tiny') long = 'Очень короткая'
      if(result.length == 'Short') long = 'Короткая'
      if(result.length == 'Medium') long = 'Средняя'
      if(result.length == 'Long') long = 'Длинная'
      if(result.length == 'XL') long = 'Очень длинная'
  
      var desc = `*${result.description}*`
      if(result.description == '(No description provided)') desc = ''
  
      var coinss = ''
      if(result.coins == 0) coinss = ``
      if(result.coins == 1) coinss = `<:usercoinunverified:866568165101273119>`
      if(result.coins == 2) coinss = `<:usercoinunverified:866568165101273119><:usercoinunverified:866568165101273119>`
      if(result.coins == 3) coinss = `<:usercoinunverified:866568165101273119><:usercoinunverified:866568165101273119><:usercoinunverified:866568165101273119>`
      
      var coinsss
      if(result.coins == 1) coinsss = `<:usercoin:864098434293825566>`
      if(result.coins == 2) coinsss = `<:usercoin:864098434293825566><:usercoin:864098434293825566>`
      if(result.coins == 3) coinsss = `<:usercoin:864098434293825566><:usercoin:864098434293825566><:usercoin:864098434293825566>`
      
      var coins = ''
      if(result.verifiedCoins == true) coins = `${coinsss}`
      if(result.verifiedCoins == false) coins = `${coinss}`
  
      var ldm = ''
      if(result.ldm == false) ldm = ''
      if(result.ldm == true) ldm = '***Объекты высокого разрешения! (ЛДМ)***'
  
      var epic = ''
      if(result.epic == true) epic = '(Эпический)'
      if(result.epic == false) epic = ''
  
  var diff = ''
      if(result.difficulty == 'Unrated') diff = `Не оценен ${epic}`
      if(result.difficulty == 'Easy') diff = `Легкая ${epic}`
      if(result.difficulty == 'Normal') diff = `Нормальная ${epic}`
      if(result.difficulty == 'Hard') diff = `Сложная ${epic}`
      if(result.difficulty == 'Harder') diff = `Сложнейшея ${epic}`
      if(result.difficulty == 'Insane') diff = `Безумная ${epic}`
      if(result.difficulty == 'Auto') diff = `Авто ${epic}`
      if(result.difficulty == 'Demon') diff = `Демон ${epic}`
      if(result.difficulty == 'Easy Demon') diff = `Легкий Демон ${epic}`
      if(result.difficulty == 'Medium Demon') diff = `Средний Демон ${epic}`
      if(result.difficulty == 'Hard Demon') diff = `Сложный Демон ${epic}`
      if(result.difficulty == 'Insane Demon') diff = `Безумный Демон ${epic}`
      if(result.difficulty == 'Extreme Demon') diff = `Экстремальный Демон ${epic}`
  
  
  var track = ''
      if(result.officialSong > 0) track = `**Трек:**   ${result.songName} (Официальный)`
      if(result.customSong > 0) track = `**Трек:**   [${result.songName}](${result.songLink})`
  
      var songid = ''
      if(result.officialSong > 0) songid = ''
      if(result.customSong > 0) songid = `**Айди:** \`${result.songID}\``
  
      var sizee = ''
      if(result.officialSong > 0) sizee = ''
      if(result.customSong > 0) sizee = `**Размер:** \`${result.songSize}\``
  
    var authorr = ''
      authorr = `**Автор:**   ${result.songAuthor}`
      
      var tp = ''
      if(result.twoPlayer == true) tp = `***Для двух игроков!***`
      if(result.twoPlayer == false) tp = ``
  
      var copied = ''
      if(result.copiedID == 0) copied = ``
      if(result.copiedID > 0) copied = `**Скопирован, айди оригинала:** \`${result.copiedID}\``
  
      var obje = ''
      if(result.objects == 0) obje = ''
      if(result.objects > 0) obje = `**Объектов:** \`${result.objects}\``
      
      
      
      
      
      var embed = new Discord.MessageEmbed({title: "Статистика уровня Geometry Dash", description: `**${result.name}**
      ${desc}`}).setThumbnail(`https://gdbrowser.com/assets/difficulties/${result.difficultyFace}.png`).setColor('RANDOM').addFields(
        {name: "_ _", value: `
        <:diff:866575381497643050> **Сложность:** ${diff}
        <:download:864833431883218964> **Скачиваний:** \`${result.downloads}\`
        <:like:864833420919046166> **Лайков:** \`${result.likes}\` 
        <:time:864833391986475008> **Длительность:** ${long} 
        ${coins}`},
        {name: "━━━━━━━━━━━━━━━━━━━━━━━━━", value: `<:orbs:864833405493182464> **Орбов:** \`${result.orbs}\` 
        <:star:864097769794174986> **Звезд:** \`${result.stars}\` 
        <:diamond:864097606836813845> **Алмазов:** \`${result.diamonds}\` `},
        {name: `━━━━━━━━━━━━━━━━━━━━━━━━━`, value: `${track}
        ${authorr}
        ${songid}
        ${sizee}`},
        {name: `━━━━━━━━━━━━━━━━━━━━━━━━━`, value: `**Айди уровня:** \`${result.id}\`
        **Выпущено на:** \`GD ${result.gameVersion}\`
        **Версия уровня:** \`${result.version}\`
        ${obje}
        ${copied}
        ${tp}
        ${ldm}`},
        {name: "_ _", value: "_ _"},
        { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }
      ).setFooter(`Автор: ${result.author} • id: ${result.accountID} • ~gdstats player ${result.accountID}`, `https://gdbrowser.com/icon/${result1.username}`)
      botmsg.edit(embed)
  })})
  break;
  default:
    botmsg.edit( new Discord.MessageEmbed({title: "Статистика Geometry Dash", description: `Неправильное использование команды! \n Использование: \n
    \`~gdstats player <ID или имя игрока>\`
    \`~gdstats level <ID уровня>\``}).setColor("DARK_RED"));
    }};



// Список комманд //

var comms_list = [{
    name: "test",
    out: test,
    about: "Тестовая команда"
  },
  {
    name: "covid",
    out: covid,
    about: "corona"
  },
  {
    name: "hello",
    out: hello,
    about: "Команда для приветствия!"
  },
  {
    name: "invite",
    out: invite,
    about: "пригласить бота на серв"
  },
  {
    name: "clear",
    out: clear,
    about: "чистка"
  },
  {
    name: "say",
    out: say,
    about: "сказать"
  },
  {
    name: "8ball",
    out: _8ball,
    about: "шар"
  },
  {
    name:"oir",
    out: oir,
    about: "орел и решка" 
  },
  {
    name:"help",
    out: help,
    about: "помощь"
  },
  {
    name:"ban",
    out: ban,
    about: "ban"
  },
  {
    name:"kick",
    out: kick,
    about: "kick"
  },
  {
    name: "avatar",
    out: avatar,
    about: 'avatar'
  },
  {
    name: "unban",
    out: unban,
    about: 'unban users'
  },
  {
    name: 'btest',
    out: btest,
    about: 'btest'
  },
  {
  name: 'chlog',
  out: chlog,
  about: 'chlog'
  },
  {
    name: 'info',
    out: _info,
    about: 'info'
  },
  {
    name: 'servers',
    out: servers,
    about: 'servers'
  },
  {
  name: 'bsstats',
  out: bsstats,
  about: 'bsstats'
  },
  {
  name: 'gdstats',
  out: gdstats,
  about: 'gdstats'
  }
]

module.exports.comms = comms_list;