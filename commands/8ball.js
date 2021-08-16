const Discord = require("discord.js");

exports.name = "8ball";
exports.guildonly = false;

exports.run = async (robot, mess, args) => {

    var answers = ["Наверно...", "Не думаю(", "Нет, нет и еще раз нет!", "Ответ не из лучших...", "Не надейся :wink:", "Возможно да, а может нет ¯\\_(ツ)_/¯", "Определенно да!", "Я думаю да...", "Угу", "Конечно же!"] //и тд
    var answer = answers[Math.floor(Math.random() * answers.length)];
    
    var embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Шар предсказаний:')
    .setDescription(`<:special8ball:860147244812075018> ${answer} <:special8ball:860147244812075018> `)
    .addFields({name: '<:void:863803473460068402>', value: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬', inline: true})
    .setTimestamp()
    .setFooter(mess.author.tag, mess.author.displayAvatarURL());
    mess.channel.send({ embeds: [embed] })}