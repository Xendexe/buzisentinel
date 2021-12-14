const Discord = module.require('discord.js');

exports.run = async (client, message, args) => { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
  const embed = new Discord.RichEmbed() 
  message.channel.send(" :eyes: ***Parancsok: | ,dog | ,cat | ,botinfo | ,avatar | ,invite | ,serverinfo | ,tagok | ,userinfo | ,weather |*** :eyes:")
   message.channel.send(embed);
}; 