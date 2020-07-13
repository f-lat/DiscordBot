const Discord = require('discord.js');
const token = 'NzMyMjYxMzk1ODkwMDQ0OTM2.XwyHPg.Te-8eGOGtU8yTehYUomHt8YP3ao';
const bot = new Discord.Client();


bot.login(token);

bot.on('ready', () => {
	console.info('Logged in as ${bot.user.tag}!');
	});

bot.on('message',(msg)=> {
	if (msg.content ==='ping') 
	{
		msg.channel.send('pong');
		msg.channel.send(msg.author);
	}	
	});
