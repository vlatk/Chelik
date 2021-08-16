const Discord = require("discord.js");

exports.name = "unban";
exports.guildonly = true;

exports.run = async (robot, mess, args)=>{
    if(!mess.guild) return mess.reply({embeds: [new Discord.MessageEmbed({title: 'Ошибка!', description: 'Эта команда недоступна в лс!'}).setThumbnail('https://cdn.discordapp.com/emojis/863804794170245121.gif?v=1').setColor("DARK_RED")]});
    args = mess.content.split(` `);
    args.shift();
    args = args.join(` `);
  
    if (!mess.channel.permissionsFor(mess.guild.me).has(Discord.Permissions.FLAGS.BAN_MEMBERS) && !mess.channel.permissionsFor(mess.guild.me).has(Discord.Permissions.permission.FLAGS.BAN_MEMBERS)) return mess.channel.send({embeds: [new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У меня недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED")]});
    if (!mess.channel.permissionsFor(mess.member).has(Discord.Permissions.FLAGS.BAN_MEMBERS) && !mess.channel.permissionsFor(mess.member).has(Discord.Permissions.permission.FLAGS.BAN_MEMBERS)) return mess.channel.send({embeds: [new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У вас недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED")]});
    mess.guild.members.unban(`${args}`)
          .then(() => {
              // We let the message author know we were able to ban the person
              mess.channel.send({embeds: [new Discord.MessageEmbed()
              .setColor('DARK_RED')
              .setTitle('Модерация⚖')
              .setDescription(`***<@${args}>*** успешно разбанен!`)
              .addFields(
                { name: '\u200B', value: '\u200B' }
              )
              .setTimestamp()
              .setFooter(mess.author.tag, mess.author.displayAvatarURL())]});
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              mess.reply({embeds: [new Discord.MessageEmbed({title: 'Модерация⚖', description: `Вы должны указать ID того, кого вернуть из бана!`}).setColor("RED")]});
              // Log the error
              console.error(err);
            });
}