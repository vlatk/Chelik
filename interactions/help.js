const Discord = require("discord.js");

exports.name = "help";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
  let embed = new Discord.MessageEmbed({title: "Команды Модерации", description: `**Команды категории модерации.** 
  *Учтите что вам необходимы соответсвующие полномочия ролей для выполнения этих команд.*\n
  _ _`})
  .setFields(
      {name: `\`~ban <@кого банить> <причина (не обязательно)>\``, value: `***Банит упомянутого пользователя.***\n
  _ _`},
      {name: `\`~kick <@кого кикнуть> <причина (не обязательно)>\``, value: `***Кикает упомянутого пользователя.*** \n
  _ _`},
      {name: `\`~unban <айди кого разбанить>\``, value: `***Разбанивает пользователя по его [айди](https://support.discord.com/hc/ru/articles/206346498-Где-мне-найти-ID-пользователя-сервера-сообщения-).***`},
      {name: `_ _`, value: `━━━━━━━━━━━━━━━━━━━━`},
  )
  .setColor('DARK_RED').setTimestamp().setFooter(`Запросил ${interaction.user.tag} • Mod Help`)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
  let embed1 = new Discord.MessageEmbed({title: "Веселые команды", description: `**Команды категории веселья.** \n
  _ _`})
  .setFields(
      {name: `\`~8ball <вопрос>\``, value: `***Спросить ответа у шара предсказаний.***\n
  _ _`},
      {name: `\`~coin \``, value: `***Орел и Решка.*** \n
  _ _`},
      {name: `_ _`, value: `━━━━━━━━━━━━━━━━━━━━`},
  )
  .setColor('RANDOM').setTimestamp().setFooter(`Запросил ${interaction.user.tag} • Fun Help`)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
  let embed2 = new Discord.MessageEmbed({title: "Команды информации о боте", description: `**Команды категории связанной с информацией о боте.** \n
  _ _`})
  .setFields(
      {name: `\`~rate <оценка/комментарий>\``, value: `***Отправить отзыв о боте на саапорт сервер.***\n
  _ _`},
      {name: `\`~chlog \``, value: `***Чейнджлог текушей версии бота.*** \n
  _ _`},
  {name: `\`~info \``, value: `***Подробная инфо о боте, версии модулей, ссылки на ресурсы и т.д.*** \n
  _ _`},
  {name: `\`~servers \``, value: `***Текущее количество серверов бота*** \n
  _ _`},
      {name: `_ _`, value: `━━━━━━━━━━━━━━━━━━━━`},
  )
  .setColor('GREEN').setTimestamp().setFooter(`Запросил ${interaction.user.tag} • Bot Info Help`)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
  let embed3 = new Discord.MessageEmbed({title: "Команды-инструменты", description: `**Команды категории инструментов** \n
  _ _`})
  .setFields(
      {name: `\`~clear <кол-во сообщений>\``, value: `***Удалить определенное кол-во сообщений в текущем канале.***\n
  _ _`},
      {name: `\`~avatar <@чей аватар? / модификатор> <модификатор>\``, value: `***Показывает ваш аватар или того кого вы упомяните, также доступны [модификаторы](https://vlatk.webador.com/avatar-modifikatory).*** \n
  _ _`},
  {name: `\`~say \``, value: `***Сказать что либо от имение бота*** \n
  _ _`},
  {name: `\`~button <Текст~сообщения> <Текст~кнопки> <https://ваш_сайт> \``, value: `***Создает кнопку с ссылкой которую вы указали. [Подробный гайд](https://vlatk.webador.com/button-gayd)*** \n
  _ _`},
      {name: `_ _`, value: `━━━━━━━━━━━━━━━━━━━━`},
  )
  .setColor('GREEN').setTimestamp().setFooter(`Запросил ${interaction.user.tag} • Tools Help`)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
  let embed4 = new Discord.MessageEmbed({title: "Команды Статистики", description: `**Команды категории статистики** \n
  _ _`})
  .setFields(
      {name: `\`~cobid <ничего|ru|ua|tr|cy|kz|us>\``, value: `***Узнать статистику по Covid-19***\n
  _ _`},
      {name: `\`~gdstats <level/player> <id уровня/имя игрока> \``, value: `***Показывает статистику вашего игрового аккаунта или уровня в Geometry Dash.*** \n
  _ _`},
  {name: `\`~bsstats <player/club> <id клуба/игрока> \``, value: `***Показывает статистику вашего игрового аккаунта или клуба в Brawl Stars.*** \n
  _ _`},
      {name: `_ _`, value: `━━━━━━━━━━━━━━━━━━━━`},
  )
  .setColor('GREEN').setTimestamp().setFooter(`Запросил ${interaction.user.tag} • Stats Help`)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
  let embed5 = new Discord.MessageEmbed({title: "Команды Minecraft", description: `**Команды категории связанной с игрой Minecraft** 
  Учтите что аккаунт должен быть ***лицензонным!***\n
  _ _`})
  .setFields(
      {name: `\`~hypixel <ник/uuid (необязательно)>\``, value: `***Показывает вашу или глобальную статистику по серверу Hypixel в Minecraft.***\n
  _ _`},
      {name: `\`~skin <ник/uuid> \``, value: `***Отправляет вам 3d рендер вашего скина, а также сам скин чтобы поставить его себе в игру.*** \n
  _ _`},
  {name: `\`~uuid <ник> \``, value: `***Выдает вам uuid вашего аккаунта.*** \n
  _ _`},
      {name: `_ _`, value: `━━━━━━━━━━━━━━━━━━━━`},
  )
  .setColor('GREEN').setTimestamp().setFooter(`Запросил ${interaction.user.tag} • Minecraft Help`)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
  let embed6 = new Discord.MessageEmbed({title: "Прочие команды", description: `**Прочие, не особо важные команды** \n
  _ _`})
  .setFields(
      {name: `\`~lol\``, value: `***Напиши и узнаешь ;).***\n
  _ _`},
      {name: `\`~help <команда (необязательно)> \``, value: `***Посмотреть категоризированный список команд или подробное описание одной команды.*** \n
  _ _`},
  {name: `\`~invite \``, value: `***Получить ссылку-приглашение бота к себе на сервер*** \n
  _ _`},
      {name: `_ _`, value: `━━━━━━━━━━━━━━━━━━━━`},
  )
  .setColor('GREEN').setTimestamp().setFooter(`Запросил ${interaction.user.tag} • Other Help`)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
let embed7 = new Discord.MessageEmbed({title: "Список команд", description: `~ban  ~kick  ~unban  ~8ball  ~coin  
~rate  ~info  ~chlog  ~servers  ~clear
~say  ~avatar  ~button ~help  ~lol  
~invite  ~covid  ~bsstats  ~gdstats  ~hypixel 
~skin  ~uuid
\n
Используй \`help <команда>\` для более
подробного объяснения о команде
━━━━━━━━━━━━━━━━━━━━`}).setColor("BLACK").setTimestamp().setFooter(`Запросил ${interaction.user.tag} • All Help`)
  
  
  
    try{
      switch(interaction.values[0]){
          case 'mod':
              interaction.reply({content: '_ _',  ephemeral: true, embeds: [embed], components: []})
              break;
              case 'fun':
                interaction.reply({content: '_ _',  ephemeral: true, embeds: [embed1], components: []})
                break;
                case 'info':
                  interaction.reply({content: '_ _',  ephemeral: true, embeds: [embed2], components: []})
                  break;
                  case 'tools':
                  interaction.reply({content: '_ _',  ephemeral: true, embeds: [embed3], components: []})
                  break;
                  case 'stats':
                  interaction.reply({content: '_ _',  ephemeral: true, embeds: [embed4], components: []})
                  break;
                  case 'mc':
                  interaction.reply({content: '_ _',  ephemeral: true, embeds: [embed5], components: []})
                  break;
                  case 'other':
                  interaction.reply({content: '_ _', ephemeral: true,  embeds: [embed6], components: []})
                  break;
                  case 'all':
                  interaction.reply({content: '_ _', ephemeral: true,  embeds: [embed7], components: []})
                  break;
      }
    }catch(err){console.log(err)}
      


}