
const Discord = require("discord.js");
const request = require("request")

exports.name = "gdstats";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
  try{

  var embed =  new Discord.MessageEmbed({title: "Подождите секундочку...", description: "Мы получаем информацию с серверов Geometry Dash. Это займет пару секунд"}).setThumbnail('https://cdn.discordapp.com/emojis/867875250121211934.gif?v=1').setColor("GREEN")
  var embed1 =  new Discord.MessageEmbed({title: "Статистика Geometry Dash", description: "Выберите \`player/level\` и введите айди или имя игрока/айди уровня."}).setColor("DARK_RED")
  var embed2 = new Discord.MessageEmbed({title: "Статистика Geometry Dash", description: "Проверьте правильность написания имени или ID профиля"}).setColor("DARK_RED")
  var embed3= new Discord.MessageEmbed({title: "Статистика Geometry Dash", description: "Проверьте правильность написания ID уровня"}).setColor("DARK_RED")
  var embed4= new Discord.MessageEmbed({title: "Статистика Geometry Dash", description: `Неправильное использование команды! \n Использование: \n
    \`/gdstats player name: <ID или имя игрока>\`
    \`/gdstats level id: <ID уровня>\``}).setColor("DARK_RED")

    var tag = interaction.options.data[0].options[0].value
 await interaction.reply({ embeds: [embed] });
    
    switch(interaction.options.data[0].name){
   case 'player':
    
    request({url: `https://gdbrowser.com/api/profile/${tag}`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result = JSON.parse(body);
      if(result == -1) return interaction.editReply({ embeds: [embed2] });
      
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
  
      var embed5 = new Discord.MessageEmbed({title: "Статистика игрока Geometry Dash", description: ""}).setThumbnail(`https://gdbrowser.com/icon/icon?form=cube&icon=${result.icon}&col1=${result.col1}&col2=${result.col2}&glow=${result.glow}`).setColor('RANDOM').addFields(
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
      interaction.editReply({ embeds: [embed5] })
  });
  break;
  case 'level':
    request({url: `https://gdbrowser.com/api/level/${tag}`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result = JSON.parse(body);
      if(result == -1) return interaction.editReply({ embeds: [embed3] });
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
      
      
      
      
      
      var embed6 = new Discord.MessageEmbed({title: "Статистика уровня Geometry Dash", description: `**${result.name}**
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
      ).setFooter(`Автор: ${result.author} • id: ${result.accountID} • /gdstats player name: ${result.accountID}`, `https://gdbrowser.com/icon/icon?form=cube&icon=${result1.icon}&col1=${result1.col1}&col2=${result1.col2}&glow=${result1.glow}`)
      interaction.editReply({ embeds: [embed6] })
  })})
  break;
  /*case "search":
    
    var srch = `${args[1]}_${args[2]}_${args[3]}_${args[4]}_${args[5]}`
    if(!args[5]) srch = `${args[1]}_${args[2]}_${args[3]}_${args[4]}`
    if(!args[4]) srch = `${args[1]}_${args[2]}_${args[3]}`
    if(!args[3]) srch = `${args[1]}_${args[2]}`
    if(!args[2]) srch = `${args[1]}`
    request({url: `https://gdbrowser.com/api/search/${srch}`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result = JSON.parse(body);
      if(result == -1) return botmsg.edit( new Discord.MessageEmbed({title: "Статистика Geometry Dash", description: "Проверьте правильность написания имя/ID уровня"}).setColor("DARK_RED"));



var res = `${result[0].name}`
if(!result[0].name) res = ''
var res1 = `${result[1].name}`
if(!result[1].name) res1 = ''
var res2 = `${result[2].name}`
if(!result[2].name) res2 = ''
var res3 = `${result[3].name}`
if(!result[3].name) res3 = ''
var res4 = `${result[4].name}`
if(!result[4].name) res4 = ''
var res5 = `${result[5].name}`
if(!result[5].name) res5 = ''
var res6 = `${result[6].name}`
if(!result[6].name) res6 = ''
var res7 = `${result[7].name}`
if(!result[7].name) res7 = ''
var res8 = `${result[8].name}`
if(!result[8].name) res8 = ''
var res9 = `${result[9].name}`
if(!result[9].name) res9 = ''


  var embed = new Discord.MessageEmbed({title: "Статистика уровня Geometry Dash", description: `Поиск по **${args[1]}**`}).setColor('RANDOM').addFields(
    {name: "_ _", value: `${res}
    ${res1}
    ${res2}
    ${res3}
    ${res4}
    ${res5}
    ${res6}
    ${res7}
    ${res8}
    ${res9}`},
    {name: "_ _", value: "_ _"},
    { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }
  ).setFooter(`Поиск по уровням Geometry dash`)
  botmsg.edit(embed)})

  
  
  
  
  
  
  */
      default:
        interaction.editReply({ embeds: [embed4] });
}} 
catch(err){interaction.reply({ content: `\`\`\`js\n${err.toString("")}\`\`\``, allowedMentions: { repliedUser: true }})}

}