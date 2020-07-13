const Discord = require('discord.js');
const token = 'NzMyMjYxMzk1ODkwMDQ0OTM2.XwyHPg.Te-8eGOGtU8yTehYUomHt8YP3ao';
const bot = new Discord.Client();

bot.on('ready', () => {
	console.info('Bot is now connected!');
	});

bot.on('message',(msg)=> {
	if (msg.author.discriminator ==='5187') 
	{
		msg.channel.send('han bharway');
	}	
	});

	

bot.login(token);