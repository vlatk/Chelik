const Discord = require("discord.js");

exports.name = "clear";
exports.guildonly = true;

exports.run = async (robot, mess, args) => {
    try{
    var embed =new Discord.MessageEmbed({title: 'Ошибка!', description: 'Эта команда недоступна в лс!'}).setThumbnail('https://cdn.discordapp.com/emojis/863804794170245121.gif?v=1').setColor("DARK_RED")
    var embed1 = new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Вы не указали сколько сообщений нужно удалить!'}).setColor("RED")
    var embed2 = new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Вы должны указать число!'}).setColor("RED")
    var embed3 = new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Вы не можете удалить более 100 сообщений за раз'}).setColor("RED")
    var embed4 =new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Кол-во сообщений не может быть меньше чем 1'}).setColor("RED")
    var embed5 =new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'У меня недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED")
    var embed6 =new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'У вас недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED")
    
    
    
    
    if(!mess.guild) return mess.reply({ embeds: [embed] });
    const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
  const amount = args.join(" "); // Количество сообщений, которые должны быть удалены
  if (!amount) return mess.channel.send({ embeds: [embed1] }); // Проверка, задан ли параметр количества
  if (isNaN(amount)) return mess.channel.send({ embeds: [embed2] }); // Проверка, является ли числом ввод пользователя 
  
  if (amount > 100) return mess.channel.send({ embeds: [embed3] }); // Проверка, является ли ввод пользователя числом больше 100
  if (amount < 1) return mess.channel.send({ embeds: [embed4] }); // Проверка, является ли ввод пользователя числом меньше 1
  
  if (!mess.channel.permissionsFor(mess.guild.me).has(Discord.Permissions.FLAGS.MANAGE_MESSAGES) && !mess.channel.permissionsFor(mess.guild.me).has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) return mess.channel.send({ embeds: [embed5] });
  if (!mess.channel.permissionsFor(mess.member).has(Discord.Permissions.FLAGS.MANAGE_MESSAGES) && !mess.channel.permissionsFor(mess.member).has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) return mess.channel.send({ embeds: [embed6] });
  
  async function delete_messages() { // Объявление асинхронной функции
  
      await mess.channel.messages.fetch({
          limit: amount
      }).then(messages => {
          mess.channel.bulkDelete(messages).then().catch(console.error)
          var embed7 = new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: `Успешно удалено ${amount} сообщений!`}).setColor("GREEN")
          mess.channel.send({ embeds: [embed7] });
      })
  };
  mess.delete().catch();
  
  delete_messages(); // Вызов асинхронной функции
}catch(err){mess.reply({ content: `\`\`\`js\n${err.toString("")}\`\`\``, allowedMentions: { repliedUser: true }})}
}