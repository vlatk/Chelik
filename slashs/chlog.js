const Discord = require("discord.js");
const request = require("request")
const ver = require("./ver.json")

exports.name = "chlog";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
    var embed = new Discord.MessageEmbed({title: `<:file:875308267931328512>**Чейнджлог Версии ${ver.bot_ver}**`, description: 
    `Итак. Что у нас нового?
    Обнова в этот раз непонятная, вроде большая, а вроде и маленькая.
    Были переведены очень много обычных команд на слеши. Подробно ~help.\n
    Новая команда \`~rate\`, \`/rate\`
    С помощью этой команды вы можете отправить свой отзыв о боте на саппорт сервер бота.\n
    Мелкие баг фиксы и новая защита от краша бота.
    Плюс бот поменял свой хостинг так что теперь не будет отключатся!\n
    :upside_down:Нуууу впринципе это все!.
    Оставайтесь с нами и следите за новостями на нашем [саппорт сервере](https://discord.gg/5Qf3m9ywpx)!`}).addFields(
        { name: '_ _', value: '_ _' }, 
        { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setColor("GREEN").setTimestamp().setFooter(`Челик БОТ | ${ver.bot_ver}`, 'https://cdn.discordapp.com/avatars/726865963424677909/428c60ceb40c3aeba0f98580ab34c726.webp');
      interaction.reply({ embeds: [embed] })
}