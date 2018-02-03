const Discord = require("discord.js");

const TOKEN = "NDA4ODIxOTExMzUxNTkwOTEy.DVVo9w.DxtmhLMEYANC2KY998UXUgXNLK0";
const PREFIX = "1";

var bot = new Discord.Client();


bot.login(TOKEN);

bot.on("ready", function () {
    console.log("u can do stufz now");
	bot.user.setGame('with the gay');
	bot.user.setStatus('dnd');
});

bot.on("message", function (message) {

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
		case 'number':
			var randomNumber = Math.floor(Math.random() * 99999999999999999) + 1;
			message.channel.send('Here is ur random number: ' + randomNumber);
			break;
		case 'announcement':
			message.guild.channels.find("name", "announcements").send("@everyone 1")
			break;
		case 'lmao':
			var embed = new Discord.RichEmbed()
				.setImage('https://cdn.discordapp.com/emojis/356556240609869824.png?v=1')
			message.channel.sendEmbed(embed)
			break;
		case 'one':
			var embed = new Discord.RichEmbed()
				.setImage('https://cdn.discordapp.com/emojis/393886629980405781.gif?v=1')
				.setColor('RANDOM')
			message.channel.sendEmbed(embed)
			break;
		case 'pizza':
			message.channel.send('🍕')
			message.channel.send('<:GWjiangoOmegaLUL:389904150886088723>')
			break;
		case 'shit':
			var embed = new Discord.RichEmbed()
				.setImage('https://www.youtube.com/watch?v=rouKUSoYjVw')
				.setColor('RANDOM')
			message.channel.sendEmbed(embed)
			break;
		case 'forcedannouncement':
			message.guild.channels.find('name', 'announcements').send('<@&356550232441356290> 1')
			message.channel.send('<:lmao:356556240609869824>')
			break;
		case 'idiot':
			message.member.setNickname('dumbass')
			break;
		case 'dab':
			message.channel.send('<:GWsquidsWhiteboy1:407619013183668245><:GWsquidsWhiteboy2:407619019483381771><:GWsquidsWhiteboy3:407619026009849857>')
			break;
		case 'giveadmin':
			message.author.send('https://discord.gg/E9N7wc5')
			message.member.kick()
			break;
		case 'help':
			message.channel.send('Commands sent to you in your DMs')
			message.author.send('- 1help - Boi you should know what this command does')
			message.author.send('- 1vote - Creates a vote in the reactions on your message')
			message.author.send('- 1everyone - Pings everyone.')
			message.author.send('- 1xd - xd')
			message.author.send('- 1yeah - yeah')
			message.author.send('- 1say - Says whatever you say.')
			message.author.send('- 1kickme - Kicks you xd')
			message.author.send('- 1giveadmin - Gives you admin.')
			message.author.send('- 1randomnumber - I was bored okay?')
			message.author.send('- 1announcement - Pings @everyone with 1. Only works in <@344960470140321794>s server (unless the server in question has a channel named #announcements exactly and the bot has perms too).')
			message.author.send('- 1forcedannouncement - Same as command above but it forces a ping and REALLY ONLY WORKS IN <@344960470140321794>s server.')
			message.author.send('- 1idiot - fuckin dumbass')
			message.author.send('- 1lmao - :lmao:')
			message.author.send('- 1one - 1 gif')
			break;
		case 'vote':
			message.react('👍')
			message.react('👎')
			break;
		case 'pin':
			message.pin()
			message.channel.send('You got pinned!')
			message.react('📌')
			break;
		case "everyone":
			message.channel.send('@everyone')
            break;
		case "xd":
			message.channel.send('xd')
			break;
		case 'yeah':
			message.channel.send('yeah')
			break;
		case 'say':
			let text = message.content.slice(PREFIX.length).trim().split(/ +/g).slice(1).join(" ");
			message.channel.send(text, {
				tts: false
			});
			console.log(text);
			break;
		case 'pants':
			message.channel.send('👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖')
        default:
		    if (message.author.equals(bot.user)) return;
			message.channel.send("1", {
				tts: true
			})
			message.react('1⃣')
    }
});

bot.on("message", function (message) {
	
	if (message.content === '@everyone') {
	message.channel.send('Pinged lmao')
	}
});