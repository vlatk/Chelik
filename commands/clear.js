const Discord = require("discord.js");

exports.name = "clear";
exports.guildonly = true;

exports.run = async (robot, mess, args) => {
    if(!mess.guild) return mess.reply(new Discord.MessageEmbed({title: 'Ошибка!', description: 'Эта команда недоступна в лс!'}).setThumbnail('https://cdn.discordapp.com/emojis/863804794170245121.gif?v=1').setColor("DARK_RED"));
    const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
  const amount = args.join(" "); // Количество сообщений, которые должны быть удалены
  if (!amount) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Вы не указали сколько сообщений нужно удалить!'}).setColor("RED")); // Проверка, задан ли параметр количества
  if (isNaN(amount)) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Вы должны указать число!'}).setColor("RED")); // Проверка, является ли числом ввод пользователя 
  
  if (amount > 100) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Вы не можете удалить более 100 сообщений за раз'}).setColor("RED")); // Проверка, является ли ввод пользователя числом больше 100
  if (amount < 1) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'Кол-во сообщений не может быть меньше чем 1'}).setColor("RED")); // Проверка, является ли ввод пользователя числом меньше 1
  
  if (!mess.channel.permissionsFor(mess.guild.me).has("MANAGE_MESSAGES") && !mess.channel.permissionsFor(mess.guild.me).has("MANAGE_MESSAGES")) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'У меня недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));
  if (!mess.channel.permissionsFor(mess.member).has("MANAGE_MESSAGES") && !mess.channel.permissionsFor(mess.member).has("MANAGE_MESSAGES")) return mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: 'У вас недостаточно прав на выполнение этой команды!'}).setColor("DARK_RED"));
  
  async function delete_messages() { // Объявление асинхронной функции
  
      await mess.channel.messages.fetch({
          limit: amount
      }).then(messages => {
          mess.channel.bulkDelete(messages)
          mess.channel.send(new Discord.MessageEmbed({title: 'Очистка сообщений🧹', description: `Успешно удалено ${amount} сообщений!`}).setColor("GREEN"));
      })
  };
  mess.delete().catch();
  
  delete_messages(); // Вызов асинхронной функции
}