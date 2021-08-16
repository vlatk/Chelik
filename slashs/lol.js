const Discord = require("discord.js");
const request = require("request")
const interaction = require("discord.js")

exports.name = "lol";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
    try{
    var menu = new Discord.MessageSelectMenu({type: 3, customId: 'classsss', options: [{label: 'Амогус?', value: 'sus', description: "Нажми и стань амогусом!", emoji: {name: 'amogus', id: '875290626835513355'}}, {label: 'Beep-o-beep', value: 'beep', description: "beep bop beep?", emoji: {name: 'beeep', id: '875290656820580422'}}, {label: 'Creeper!?', value: 'mine', description: "oohh maaan...", emoji: {name: 'mine', id: '875290669734854707'}}], placeholder: 'Выбирай'})
    interaction.reply({content: '_ _', components: [{type:1, components: [menu] }]});

}catch(err){console.log(err)}
}
