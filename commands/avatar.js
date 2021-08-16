const Discord = require("discord.js");

exports.name = "avatar";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    let user = mess.mentions.users.first()
    if(!user){
        user = mess.author;
    }
    try{


    var argss = args[0]
    if(isNaN(+args[0])) argss = args[1]
    

    var sizee = argss
    if(!argss) sizee = 1024
    if(argss == '4096') sizee = 4096
    if(argss > 4096) sizee = 4096
    if(argss < 4096) sizee = 2048
    if(argss < 2048) sizee = 1024
    if(argss < 1024) sizee = 512
    if(argss < 512) sizee = 256
    if(argss < 256) sizee = 128
    if(argss < 128) sizee = 64
    if(argss < 64) sizee = 32
    if(argss < 32) sizee = 16
    if(argss < 16) sizee = 16
    if(argss == 0) sizee = 1024

    var ava = `аватар (${sizee} px):`
    if(sizee == 1024) ava= 'аватар:'
    
var embed =  new Discord.MessageEmbed({title: ``, description: `**<@${user.id}> ${ava}**`}).setImage(`${user.displayAvatarURL({size: sizee, dynamic: true})}`).setColor("RANDOM")
  mess.channel.send({ embeds: [embed] })
    }
    catch(err){
      embed = new Discord.MessageEmbed({title: 'Ошибка!', description: `Произошла ошибка!`})
    .setThumbnail('https://cdn.discordapp.com/emojis/871344466898853900.gif?v=1')
     .addFields({ name: 'Это может быть связано с', value: `Вы ввели несуществующие разрешение аватара
    _Пример: \`~avatar @Челик mgjdfo\`_`},
    { name: '_ _', value: '_ _'},
    { name: 'Введите команду правильно!', value: '***Примеры:***'},
    { name: '\`~avatar\`', value: ' - ваш автар'},
    { name: '_ _', value: '_ _'},
    { name: '\`~avatar 16,32,64,128,256,512,1024,2048,4096\`', value: `- ваш аватар,
    но в разрешнеии 16,32,64,128,256,512,1024,2048,4096 (выберите один) `},
    { name: '_ _', value: '_ _'},
    { name: '\`~avatar @ваш_друг\`', value: '- аватар вашего друга или кого-то еще (кого упомяните)'},
    { name: '_ _', value: '_ _'},
    { name: '\`~avatar @ваш_ друг 16,32,64,128,256,512,1024,2048,4096\`', value: '- аватар вашего друга или кого-то еще (кого упомяните), но  в разрешнеии 16,32,64,128,256,512,1024,2048,4096 (выберите один)'},
    { name: '▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ', value: '_ _', inline: true })
    .setFooter('Это сообщение удалиться через 20 секунд.')  
    let botmsg = await mess.channel.send({ embeds: [embed] })
    
  
  setTimeout(function(){
    botmsg.delete()
  }, 20000)}
}