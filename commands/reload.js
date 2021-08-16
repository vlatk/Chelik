
const Discord = require("discord.js");
const request = require("request")
const fs = require('fs');

exports.name = "reload";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
  try{
  if(mess.author.id == "510739111859060736" || mess.author.id == "445909443109060619") {
    var name = args.join(" ").toLowerCase()
    var command = robot.commands.get(name)
    if(!command){ let botmsg = await mess.reply({ content: 'Unknown command, check ~help', allowedMentions: { repliedUser: true }})
    setTimeout(function(){ 
        botmsg.delete()
        }, 5000)};
    delete require.cache[require.resolve(`./${command.name}.js`)];
    robot.commands.set(name, require(`./${name}.js`));
    let botmsg = await mess.channel.send({ content: "Success!", allowedMentions: { repliedUser: true }});
    setTimeout(function(){ 
        botmsg.delete()
        }, 5000)
}
}
catch(err){  let botmsg = await mess.reply({ content: `\`\`\`js\n${err.toString("")}\`\`\``, allowedMentions: { repliedUser: true }})
setTimeout(function(){ 
    botmsg.delete()
    }, 5000)}
  }
