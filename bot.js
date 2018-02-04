const fs = require("fs");
const Discord = require("discord.js");
var bot = new Discord.Client();
const auth = require("./auth.json");
//made from CopperBanana's weird bot script, thanks Copper!
bot.login(auth.token);
var prefix = auth.prefix
bot.on("ready", function () {
    console.log("lol hi im alive");
	bot.user.setActivity('prefix is: ' + (prefix));
	bot.user.setStatus('dnd');
});

bot.on("message", function (message) {

    if (!message.content.startsWith(auth.prefix)) return;

    var args = message.content.substring((auth.prefix).length).split(" ");

    switch (args[0].toLowerCase()) {
    case 'changeprefix':
      let newPrefix = message.content.split(" ").slice(1,2)[0];
      auth.prefix = newPrefix;
      var prefix = newPrefix;

      fs.writeFile("./auth.json", JSON.stringify(auth), (err) => console.error);
      break;
		case 'number':
			var randomNumber = Math.floor(Math.random() * 99999999999999999) + 1;
			message.channel.send('wowee that sure is randem xd: ' + randomNumber)
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
		case 'shit':
			var embed = new Discord.RichEmbed()
				.setImage('https://www.youtube.com/watch?v=rouKUSoYjVw')
				.setColor('RANDOM')
			message.channel.sendEmbed(embed)
			break;
		case 'idiot':
			message.member.setNickname('dumbass')
			break;
		case 'help':
			message.channel.send('Commands sent to you in your DMs')
			message.author.send('- help - take a guess')
			message.author.send('- vote - makes ur message into a vote')
			message.author.send('- xd - xd')
			message.author.send('- yeah - yeah')
      message.author.send("-everyone - @'s everyone")
			message.author.send('- say - Says whatever you say.')
			message.author.send('- number - makes a random numbr')
			message.author.send('- idiot - fuckin dumbass')
			message.author.send('- one - 1 gif')
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
			message.channel.send(' ' + message.author)
			message.channel.send('Get fucked')
            break;
		case "xd":
			message.channel.send('xd')
			break;
		case 'yeah':
			message.channel.send('yeah')
			break;
		case 'say':
			let text = message.content.slice((auth.prefix).length).trim().split(/ +/g).slice(1).join(" ");
			message.channel.send(text, {
				tts: false
			});
			console.log(text);
			break;
		case 'gay':
			message.channel.send("no u")
			break;
		case 'pants':
			message.channel.send('👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖')
      break;
        default:
		    if (message.author.equals(bot.user)) return;
			message.channel.send("I don't recognise this command, try something else!", {
				tts: true
			})
			message.react('🇪')
    }
});

bot.on("message", function (message) {

	if (message.content === '@everyone') {
	message.channel.send('Pinged lmao')
	}
});
