const Discord = require("discord.js");
const request = require("request")

exports.name = "hypixel";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
    var embed2 =  new Discord.MessageEmbed({title: "Ошибка!", description: "Вы указали неверный ник \n"}).setThumbnail('https://cdn.discordapp.com/emojis/871344466898853900.gif?v=1').setFooter('*ник должен быть от лицензионого аккаунта Minecraft')
var embed3 =  new Discord.MessageEmbed({title: "Ошибка!", description: "Вы указали неверный ник, либо пользователь никогда не посещал Hypixel.net \n"}).setThumbnail('https://cdn.discordapp.com/emojis/871344466898853900.gif?v=1').setFooter('*ник должен быть от лицензионого аккаунта Minecraft')
try{
    if(!interaction.options.data[0]){
    request({url: `https://api.hypixel.net/counts`, headers: {"API-Key": "hypixel api-key", "Content-Type": "application/json"}}, (err, res, body) => {
        var result = JSON.parse(body);
        var embed = new Discord.MessageEmbed({title: 'Статистика Hypixel', description: ''}).setColor('RANDOM').setThumbnail('https://avatars.githubusercontent.com/u/3840546?s=280&v=4')
        .addFields({name: ":arrow_forward: **Сейчас играют:**", value: `**${result.playerCount}** _игроков_
        ━━━━━━━━━━━━━━━━━━━━━━━━━`},
        {name: "<:hypixel:870433112054698005> **В главном лобби:**", value: `**${result.games.MAIN_LOBBY.players}** _игроков_
        ━━━━━━━━━━━━━━━━━━━━━━━━━`},
        {name: "<:skywars:870430896665292870> **SkyWars:**", value: `**${result.games.SKYWARS.players}** _игроков_
        ━━━━━━━━━━━━━━━━━━━━━━━━━`},
        {name: "<:bedwars:870430914793062410> **BedWars:**", value: `**${result.games.BEDWARS.players}** _игроков_
        ━━━━━━━━━━━━━━━━━━━━━━━━━`},
        {name: "<:Duels:870430906656100362> **Duels:**", value: `**${result.games.DUELS.players}** _игроков_
        ━━━━━━━━━━━━━━━━━━━━━━━━━`},
        {name: "<:noicon:870432167619076136> **SkyBlock:**", value: `**${result.games.SKYBLOCK.players}** _игроков_`},
        {name: "_ _", value: `_и еще [23 режима...](https://hypixel.net/play/#games)_`},
        { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setTimestamp().setFooter('https://hypixel.net/', 'https://hypixel.net/favicon-32x32.png')
interaction.reply({ embeds: [embed] })})}

    if(interaction.options.data[0].value){
        request({url: `https://api.mojang.com/users/profiles/minecraft/${interaction.options.data[0].value}`, headers: {"Content-Type": "application/json"}}, (err, res, body) => {
                if(err) return console.error(err);
                try{var result1 = JSON.parse(body);}
                catch(err){  return interaction.reply({ embeds: [embed2] })}
            
                var uuid = result1.id
                if(!result1.name) uuid = interaction.options.data[0].value
            request({url: `https://api.hypixel.net/player?uuid=${uuid}`, headers: {"API-Key": "hypixel api-key", "Content-Type": "application/json"}}, (err, res, body) => {
                if(err) return console.error(err);
                try{var result = JSON.parse(body);}
                catch(err){  return interaction.reply({ embeds: [embed3] })}
                var lang = result.player.userLanguage
                if(!result.player.userLanguage) lang = result.player.language

                var embed1 = new Discord.MessageEmbed({title: 'Статистика Hypixel', description: ''}).setColor('RANDOM').setThumbnail(`https://crafatar.com/renders/body/${uuid}?scale=10`)
        .addFields({name: "Имя:", value: `${result.player.displayname}`},
        {name: "Последний раз был на сервере:", value: `<t:${Math.round(new Date(result.player.lastLogout).getTime()/1000)}>`},
        {name: "Язык:", value: `${lang}`},
        {name: "Последний раз играл в:", value: `${result.player.mostRecentGameType}`},
        {name: "_ _", value: `_ _`},
        {name: "_ _", value: `_ _`},
        { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _' }).setFooter(`${result.player.displayname} • ${result.player.uuid}`, 'https://hypixel.net/favicon-32x32.png')
        interaction.reply({ embeds: [embed1] })})});
    }
}catch(err){console.log(err)}
}