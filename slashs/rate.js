const Discord = require("discord.js");
const request = require("request")

exports.name = "rate";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
    try{
        if(!interaction.options.data[0].value) return interaction.reply({content: 'Напишите комментарий!'});
    
    var token = 'NzI2ODY1OTYzNDI0Njc3OTA5.Xvjgrg.dAWQPk-weeKIZbAztS_Mznw6_6Q'
    request.post({url: `https://discord.com/api/v9/channels/863369213893017602/messages`, headers: {"Authorization": "Bot "+token, "Content-Type": "application/json"},
    body: JSON.stringify({
        "tts": false,
        "embeds": [{
          "title": `${interaction.user.tag}`,
          "description": `
          _${interaction.options.data[0].value}_
          \n
          ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ `,
          "color": 3066993,
          "timestamp": new Date().toISOString()
        }]
        })})
        interaction.reply({content: '<a:success:875454382437707776> Отзыв отправлен! Спасибо <З'})
    }catch(err){console.log(err)}
}