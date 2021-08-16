const Discord = require("discord.js");
const request = require("request")

exports.name = "eval";
exports.guildonly = false;

exports.run = async (robot, mess, args) => {
    if(mess.author.id == "510739111859060736") {
        try{
            mess.channel.send(eval(args.join(" ")));
            } 
            catch(err){mess.channel.send(`\`\`\`js\n${err.toString("")}\`\`\``)}}}