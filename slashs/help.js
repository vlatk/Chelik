const Discord = require("discord.js");
const request = require("request")
const ver = require("./ver.json")

exports.name = "help";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
    try{
    interaction.reply({content: "К сожалению команда help недоступна в виде слеш-команды. Используйте **\`~help\`** для получения списка команд"})
    }catch(err){console.log(err)}
}    