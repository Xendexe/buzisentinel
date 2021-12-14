const Discord = module.require('discord.js');

exports.run = async (client, message, args) => { //A client, és a message definálva van, az args-al együtt
  const embed = new Discord.RichEmbed() 
   embed.addField('Neved', message.author.username);
   embed.setColor('RED')
   embed.setTitle('Abuxeon - Infók')
   embed.addField('Jelenlegi szerver', message.guild.name)
   embed.addField('Bot verzió:', '1.0')
   embed.addField('Bot fejlesztő: SteX#5071')
   embed.addField('Bot neve','Abuxeon')
   embed.setThumbnail(message.author.avatarURL)
  message.channel.send(embed);
}; 