const Discord = require('discord.js');
const token = '';
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
