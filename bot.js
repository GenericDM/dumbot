const fs = require("fs");
const crypto = require("crypto")
const Discord = require("discord.js");
var bot = new Discord.Client();
const auth = require("./auth.json");
//made from CopperBanana's weird bot framework, thanks Copper!
//comment for webhook test
bot.login(auth.token);
var prefix = auth.prefix
bot.on("ready", function () {
	console.log("Let there be life.");
	bot.user.setActivity('prefix is: ' + (prefix));
	bot.user.setStatus('dnd');
});

function convertToHex(str) {
	var hex = '';
	for (var i = 0; i < str.length; i++) {
		hex += '' + str.charCodeAt(i).toString(16);
	}
	return hex;
}

function convertFromHex(hex) {
	var hex = hex.toString(); //force conversion
	var str = '';
	for (var i = 0; i < hex.length; i += 2)
		str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return str;
}

bot.on("guildMemberAdd", (member) => {
	console.log(`New User "${member.user.username}" has joined "${member.guild.name}"`);
	member.guild.channels.find('name', 'general').send(`Welcome, "${member.user.username}" enjoy your (hopefully long) stay.`);
});

bot.on("message", function (message) {

	if (!message.content.startsWith(auth.prefix)) return;
	if (message.author == bot.user) return;

	var args = message.content.substring((auth.prefix).length).trim().split(/ +/g);

	switch (args.shift().toLowerCase()) {
		case 'about':
			const embed = new Discord.RichEmbed()
				.addField(`Made by`, `<@205840324407459840> and <@344960470140321794>`)
				.setColor('RANDOM')
			message.channel.send(embed)
			break;
		case 'changeprefix':
			if (message.author.id !== auth.owner_id) return;
			let newPrefix = message.content.split(" ").slice(1, 2)[0];
			auth.prefix = newPrefix;
			var prefix = newPrefix;
			console.log("new prefix, " + prefix)
			bot.user.setActivity('prefix is: ' + (prefix));
			fs.writeFile("./auth.json", JSON.stringify(auth), (err) => console.error);
			break;
		case 'number':
			var randomNumber = Math.floor(Math.random() * 99999999999999999) + 1;
			message.channel.send('wowee that sure is randem xd: ' + randomNumber)
			break;
		case 'tohex':
			let hexstring = message.content.slice((auth.prefix).length).trim().split(/ +/g).slice(1).join(" ");
			message.channel.send(convertToHex(hexstring))
			break;
		case 'fromhex':
			let textstring = message.content.slice((auth.prefix).length).trim().split(/ +/g).slice(1).join(" ");
			if (textstring === "@everyone" || "@here") return;
			message.channel.send(convertFromHex(textstring))
			break;
		case 'lmao':
			var embed2 = new Discord.RichEmbed()
				.setImage('https://cdn.discordapp.com/emojis/356556240609869824.png?v=1')
			message.channel.send(embed2)
			break;
		case 'one':
			var embed2 = new Discord.RichEmbed()
				.setImage('https://cdn.discordapp.com/emojis/393886629980405781.gif?v=1')
				.setColor('RANDOM')
			message.channel.send(embed2)
			break;
		case 'shit':
			var embed2 = new Discord.RichEmbed()
				.setImage('https://www.youtube.com/watch?v=rouKUSoYjVw')
				.setColor('RANDOM')
			message.channel.send(embed2)
			break;
		case 'idiot':
			message.member.setNickname('dumbass')
			break;
		case 'help':
			message.channel.send("Commands sent to you in your DMs")
			message.author.send('-about -tell u stuff \n- help - take a guess \n- vote - makes ur message into a vote \n- xd - xd \n- yeah - yeah \n-everyone - @s everyone \n- say - Says whatever you say. \n- number - makes a random numbr \n- idiot - fuckin dumbass \n- one - 1 gif \n-tohex -converts your input into hex \n- fromhex -converts your input from hex')
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
			message.channel.send("lol u sure are")
			break;
			//		case 'testy':
			//			bot.emit("guildMemberAdd", message.member);
			//			break;
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
				tts: false
			})
			message.react('🇪')
	}
});
bot.on("message", (message) => {
	if (message.content === '<@408821911351590912>') {
		var help = (prefix + 'help')
		message.channel.send('Type ' + help + ' to see a list of commands')
	}
});
bot.on("message", function (message) {
	if (message.content === '@everyone') {
		message.channel.send('Pinged lmao')
	}
});