const Discord = require('discord.js');
const token = '';
const bot = new Discord.Client();

bot.on('ready', () => {
	console.info('Bot is now connected!');
	});

bot.on('message',(msg)=> {
	if (msg.author.discriminator === YOUR_DISCRIMINATOR || msg.author.username === YOUR_USERNAME) 
	{
		msg.channel.send(YOUR_MESSAGE);
	}	
	});



bot.login(token);
