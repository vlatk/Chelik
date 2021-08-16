const Discord = require("discord.js");

exports.name = "ban";
exports.guildonly = true;

exports.run = async (robot, mess, args)=>{
  try{
    var embed4 = new Discord.MessageEmbed({title: 'Ошибка!', description: 'Эта команда недоступна в лс!'}).setThumbnail('https://cdn.discordapp.com/emojis/863804794170245121.gif?v=1').setColor("DARK_RED")
    if(!mess.guild) return mess.reply({ embeds: [embed4] });
    args = mess.content.split(` `);
    args.shift();
    args = args.join(` `);
    var reason = args.split(' ').slice(1).join(" ")
    if(!reason) reason = "none"; 
  
var embed = new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У меня недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED")
var embed1 = new Discord.MessageEmbed({title: 'Модерация⚖', description: 'У вас недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED")

var embed3 = new Discord.MessageEmbed({title: 'Модерация⚖', description: `У меня недостаточно прав!`}).setColor("RED")

    if (!mess.channel.permissionsFor(mess.guild.me).has(Discord.Permissions.FLAGS.BAN_MEMBERS) && !mess.channel.permissionsFor(mess.guild.me).has(Discord.Permissions.FLAGS.BAN_MEMBERS)) return mess.channel.send({ embeds: [embed] });
    if (!mess.channel.permissionsFor(mess.member).has(Discord.Permissions.FLAGS.BAN_MEMBERS) && !mess.channel.permissionsFor(mess.member).has(Discord.Permissions.FLAGS.BAN_MEMBERS)) return mess.channel.send({ embeds: [embed1] });
      const user = mess.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = mess.guild.members.cache.get(user.id);
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
var embed2 =new Discord.MessageEmbed()
              .setColor('DARK_RED')
              .setTitle('Модерация⚖')
              .setDescription(`***<@${user.id}>*** успешно забанен!`)
              .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Причина:', value: `${reason}` , inline: true },
              )
              .setTimestamp()
              .setFooter(mess.author.tag, mess.author.displayAvatarURL())

              mess.channel.send({ embeds: [embed2] });
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              mess.reply({ embeds: [embed3] });
              // Log the error
              console.error(err);





            });
        } else {
          var embed5 = new Discord.MessageEmbed({title: 'Модерация⚖', description: `Этот человек не с этого сервера!`}).setColor("RED")
          // The mentioned user isn't in this guild
          mess.reply({ embeds: [embed5] });
        }
      } else {
        // Otherwise, if no user was mentioned
        var embed6 = new Discord.MessageEmbed({title: 'Модерация⚖', description: `Вы не указали кого забанить!`}).setColor("RED")
        mess.reply({ embeds: [embed6] });
      }}
      catch(err){mess.reply({ content: `\`\`\`js\n${err.toString("")}\`\`\``, allowedMentions: { repliedUser: true }})}
}