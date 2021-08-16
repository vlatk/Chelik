const Discord = require("discord.js");
const request = require("request")


exports.name = "classsss";
exports.guildonly = false;

exports.run = async (robot, interaction)=>{
try{

      switch(interaction.values[0]){
          case 'sus':
              interaction.reply({content: '<:sus:875113008223912006> Amogus sus!', components: []})
              break;
              case 'beep':
                interaction.reply({content: '<:beep:875133351986626571> Bep boop beep!', components: []})
                break;
                case 'mine':
                  interaction.reply({content: '<:creepr:875293848287469568> Ohhhh maaaan!', components: []})
                  break;
      }
    }catch(err){console.log(err)}
      


}