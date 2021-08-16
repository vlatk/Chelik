
const Discord = require("discord.js");
const request = require("request")
const fs = require('fs');

exports.name = "reload";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
  try{
  if(interaction.user.id == "510739111859060736" || interaction.user.id == "445909443109060619") {
    var name = interaction.options.data[0].value
    var command = robot.slashs.get(name)

    if(!command){await interaction.reply({ content: 'Unknown command, check ~help', ephemeral: true,  allowedMentions: { repliedUser: true }})};

    if(command){
        delete require.cache[require.resolve(`./${command.name}.js`)];
        robot.slashs.set(name, require(`./${name}.js`));
        await interaction.reply({ content: "Success!", ephemeral: true,  allowedMentions: { repliedUser: true }})};
}
}
catch(err){  interaction.reply({ content: `\`\`\`js\n${err.toString("")}\`\`\``, ephemeral: true,  allowedMentions: { repliedUser: true }})};
  }
