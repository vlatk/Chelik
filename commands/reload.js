
const Discord = require("discord.js");
const request = require("request")

exports.name = "reload";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{
    if(mess.author.id == "ваш_айди" || mess.author.id == "айди еще кого если вы не единственный разработчик") {
    var name = args.join(" ").toLowerCase()
    var command = robot.commands.get(name)
    if(!command){ let botmsg = await mess.channel.send('Unknown command, check ~help')
    setTimeout(function(){ 
        botmsg.delete()
        }, 5000)}
    delete require.cache[require.resolve(`./${command.name}.js`)];
    robot.commands.set(name, require(`./${name}.js`));
    let botmsg = await mess.channel.send("Success!");
    setTimeout(function(){ 
        botmsg.delete()
        }, 5000)
}}