const Discord = module.require('discord.js');

exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send(`**Kazu éppen streamelni kezdett, ha van kedved nézz be te is hozzá! | !parancsok, !dc |**
https://twitch.tv/kazu078 
@everyone`);
};

