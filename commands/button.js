const Discord = require("discord.js");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const config = require("../config.json")
    
exports.name = "button";
exports.guildonly = false;

exports.run = async (robot, mess, args)=>{


    mess.channel.send({content: `${args[0].replace(/[^а-яёa-z0-9.!)(^&?,/@#$`'"=)+:;№<>%*_]/gi, ' ')}`, components: [{type: 1, components: [{
        "type": 2,
                            "label": `${args[1].replace(/[^а-яёa-z0-9.!)(^&?,/@#$`'"=)+:;№<>%*_]/gi, ' ')}`,
                            "style": 5,
        "url": `${args[2]}`,
        "disabled": false,
        }]}], 
    }).catch(console.error)
}
