const Discord = module.require('discord.js');

exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send(`**Kazu és Atno éppen streamelni kezdett, ha van kedved nézz be hozzájuk te is!**
https://twitch.tv/kazu078 , https://twitch.tv/mratno96
@everyone`);
};

