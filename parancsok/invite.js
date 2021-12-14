const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 const embed = new Discord.RichEmbed() 
   embed.setColor('RED')
   embed.setTitle('Abuxeon - Invite')
   embed.addField("MrAtno96 Discord szervere https://discord.gg/KVNEb5cY")
   embed.setFooter("Abuxeon | ,invite")
  message.channel.send(embed);
}; 

exports.help = {
    name: "invite",
    category: "sasadsad",
    description: "bot meghivas"
} 