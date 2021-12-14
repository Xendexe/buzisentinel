const Discord = module.require('discord.js');

exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send(`**MrAtno éppen streamelni kezdett, ha van kedved nézz be te is hozzá! | !dc |**
https://twitch.tv/mratno96 
@everyone`);
};
