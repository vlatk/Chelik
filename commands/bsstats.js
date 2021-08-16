const Discord = require("discord.js");
    const request = require("request")
    
exports.name = "bsstats";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
  try{
    var embed = new Discord.MessageEmbed({title: "Подождите секундочку...", description: "Мы получаем информацию с серверов Brawl Stars. Это займет от 2 до 5 секунд. Пожалуйста подождите"}).setThumbnail('https://cdn.discordapp.com/emojis/867875250121211934.gif?v=1').setColor("GREEN")
    var embed1 = new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: "Выберите \`player/club\` и введи тег игрока/клуба."}).setColor("DARK_RED")
    var embed2 =  new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: "Проверьте правильность написания тега."}).setColor("DARK_RED")

    var embed4 =  new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: "Проверьте правильность написания тега."}).setColor("DARK_RED")
    var embed5 =  new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: `Неправильное использование команды! \n Использование: \n
    \`~bsstats player <тег без #>\`
    \`~bsstats club <тег без #>\``}).setColor("DARK_RED")

  let botmsg = await mess.reply({ embeds: [embed] });
    if(!args[0]) return botmsg.edit({ embeds: [embed1] });

    switch(args[0]) {
    case 'player':
    request({url: `https://api.brawlstars.com/v1/players/%23${args[1].replace(/[^a-zё0-9]/gi, '')}/battlelog`, headers: {"Authorization": "bearer token", "Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result1 = JSON.parse(body);
      if(result1.reason) return botmsg.edit({ embeds: [embed2] });
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
      if(result1.items[0].battle.mode == "basketBrawl") battlemode = "Баскетбой";
  
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
  
    request({url: `https://api.brawlstars.com/v1/players/%23${args[1].replace(/[^a-zё0-9]/gi, '')}`, headers: {"Authorization": "", "Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result = JSON.parse(body);
      var embed3 =  new Discord.MessageEmbed({title: "Статистика Brawl Stars", description: "Проверьте правильность написания тега."}).setColor(`RED`)
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
      if(battlemode == 'Баскетбой') mode = "<:basketbrawl:869588056104124506> **Режим:**";
  
  var res = ''
  if(battleresult == 'Победа') res = '<a:win:863804751752855562> **Результат:**';
  if(battleresult == 'Поражение') res = '<a:lose:863804794170245121> **Результат:**';
  if(battleresult == 'Ничья') res = ':vs: **Результат:**';
  if(battleresult == 'Неизвестно') res = ':grey_question: **Результат:**';
  
  var clubname = (result.club.name);
  if(result.club.name == undefined) clubname = 'Не состоит в клубе';
  var clubtag = (result.club.tag);
  if(result.club.tag == undefined) clubtag = '#000000000';
      if(result.reason) return botmsg.edit({ embeds: [embed3] });
      var embed8 = new Discord.MessageEmbed({title: `Статистика игрока в Brawl Stars`, description: `_ _`}).setThumbnail(`https://cdn.brawlify.com/profile/${result.icon.id}.png`).addFields(
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
     botmsg.edit({ embeds: [embed8] })
  })})
     break;
  case 'club':
    request({url: `https://api.brawlstars.com/v1/clubs/%23${args[1].replace(/[^a-zё0-9]/gi, '')}`, headers: {"Authorization": "bearer token", "Content-Type": "application/json"}}, (err, res, body) => {
      if(err) return console.error(err);
      var result2 = JSON.parse(body);
      if(result2.reason) return botmsg.edit({ embeds: [embed4] });
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
  
     
      var embed9 = new Discord.MessageEmbed({title: `Статистика клуба в Brawl Stars`, description: `_ _`}).setThumbnail(`https://cdn.brawlify.com/club/${result2.badgeId}.png`).addFields(
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
     botmsg.edit({ embeds: [embed9] })
  })
     break;
    default: 
    botmsg.edit({ embeds: [embed5] });
    }}
    catch(err){mess.reply({ content: `\`\`\`js\n${err.toString("")}\`\`\``, allowedMentions: { repliedUser: true }})}
}