const Discord = require("discord.js");
const request = require("request")
const ver = require("./ver.json")

exports.name = "info";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
    
    var embed = new Discord.MessageEmbed({title: "Информация Челик БОТ", description: `Версия [Бота](https://discord.com/oauth2/authorize?client_id=726865963424677909&scope=bot&permissions=8) - **${ver.bot_ver}** 
    Версия [Discord.js](https://discord.js.org/) - **${require("discord.js").version}** 
    Версия [Node.js](https://nodejs.org/en/) - **${process.version}**
    \n
    [Пригласите Бота к себе!](https://discord.com/api/oauth2/authorize?client_id=726865963424677909&scope=bot%20applications.commands&permissions=8)
    [GitHub Бота](https://github.com/vlatk/Chelik)
    [Саппорт Сервер](https://discord.gg/5Qf3m9ywpx)
    \n
    ━━━━━━━━━━━━━━
    Используемые ресурсы:
    **[Brawl Stars API](https://developer.brawlstars.com/#/)**
    **[GDBrowser API](https://gdbrowser.com/api)**
    **[Mojang API](https://wiki.vg/Mojang_API)**
    **[Hypixel API](https://api.hypixel.net/)**
    **[coronavirus-tracker-api](https://coronavirus-tracker-api.herokuapp.com/)**
    **[Nomics CryptoCurrencies API](https://nomics.com/docs/)**
    `}).setThumbnail("https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp").addFields(
      { name: '\u200B', value: `\u200B` },
      { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setColor("GREEN").setTimestamp();
  interaction.reply({ embeds: [embed] })
}