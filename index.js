const Discord = require('discord.js');
const token = '';
const bot = new Discord.Client();

bot.on('ready', () => {
	console.info('Bot is now connected!');
	});

bot.on('message',(msg)=> {
	if (msg.author.discriminator ==='6629' || msg.author.username === 'Naveed Ali') 
	{
		msg.channel.send('Naveed ney chuss mari hai bhai sun lo !');
	}	
	});



bot.login(token);
