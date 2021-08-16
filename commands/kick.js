const Discord = require("discord.js");

exports.name = "kick";
exports.guildonly = true;

exports.run = async (robot, mess, args)=>{
    if(!mess.guild) return mess.reply({embeds: [new Discord.MessageEmbed({title: 'Ошибка!', description: 'Эта команда недоступна в лс!'}).setThumbnail('https://cdn.discordapp.com/emojis/863804794170245121.gif?v=1').setColor("DARK_RED")]});
    args = mess.content.split(` `);
    args.shift();
    args = args.join(` `);
    var reason = args.split(' ').slice(1).join(" ")
    if(!reason) reason = "none";  
    if (!mess.channel.permissionsFor(mess.guild.me).has(Discord.Permissions.FLAGS.KICK_MEMBERS) && !mess.channel.permissionsFor(mess.guild.me).has(Discord.Permissions.FLAGS.KICK_MEMBERS)) return mess.channel.send({embeds: [new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У меня недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED")]});
    if (!mess.channel.permissionsFor(mess.member).has(Discord.Permissions.FLAGS.KICK_MEMBERS) && !mess.channel.permissionsFor(mess.member).has(Discord.Permissions.FLAGS.KICK_MEMBERS)) return mess.channel.send({embeds: [new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У вас недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED")]});
  
    const user = mess.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = mess.guild.members.cache.get(user.id);;
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
              mess.channel.send({embeds: [new Discord.MessageEmbed()
              .setColor('DARK_RED')
              .setTitle('Модерация⚖')
              .setDescription(`***<@${user.id}>*** успешно кикнут!`)
              .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Причина:', value: `${reason}` , inline: true },
              )
              .setTimestamp()
              .setFooter(mess.author.tag, mess.author.displayAvatarURL())]});
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              mess.reply({embeds: [new Discord.MessageEmbed({title: 'Модерация⚖', description: `У меня недостаточно прав!`}).setColor("RED")]});
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          mess.reply({embeds: [new Discord.MessageEmbed({title: 'Модерация⚖', description: `Этот человек не с этого сервера!`}).setColor("RED")]});
        }
        // Otherwise, if no user was mentioned
      } else {
        mess.reply({embeds: [new Discord.MessageEmbed({title: 'Модерация⚖', description: `Вы не указали кого кикнуть!`}).setColor("RED")]});
      }
}