const Discord = require("discord.js");
const ver = require("./ver.json")
const request = require("request")

exports.name = "rate";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    try{
        if(!args[0]) return mess.reply({content: 'Напишите комментарий!'});
        args = mess.content.split(` `);
    args.shift();
    args = args.join(` `);
    
    var token = 'your token'
    request.post({url: `https://discord.com/api/v9/channels/863369213893017602/messages`, headers: {"Authorization": "Bot "+token, "Content-Type": "application/json"},
    body: JSON.stringify({
        "tts": false,
        "embeds": [{
          "title": `${mess.author.tag}`,
          "description": `
          _${args}_
          \n
          ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ ▬ `,
          "color": 3066993,
          "timestamp": new Date().toISOString()
        }]
        })})
        mess.reply({content: '<a:success:875454382437707776> Отзыв отправлен! Спасибо <З'})
    }catch(err){console.log(err)}
}