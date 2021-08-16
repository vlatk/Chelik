
const Discord = require("discord.js");

exports.name = "hello";
exports.guildonly = false;

exports.run = async (robot, mess, args, interaction)=>{
    var menu = new Discord.MessageSelectMenu({type: 3, customId: 'classss', options: [{label: 'Амогус?', value: 'sus', description: "Нажми и стань амогусом!", emoji: {name: 'amogus', id: '875290626835513355'}}, {label: 'Beep-o-beep', value: 'beep', description: "beep bop beep?", emoji: {name: 'beeep', id: '875290656820580422'}}, {label: 'Creeper!?', value: 'mine', description: "oohh maaan...", emoji: {name: 'mine', id: '875290669734854707'}}], placeholder: 'Выбирай'})
    var button = new Discord.MessageButton({type: 2, style: 4}).setLabel('Ку').setCustomId('kukuku');
    mess.channel.send({content: '_ _', components: [{type:1, components: [menu] }]});
}
