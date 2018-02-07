const fs = require("fs");
const Discord = require("discord.js");
var bot = new Discord.Client();
const auth = require("./auth.json");
//made from CopperBanana's weird bot script, thanks Copper!
bot.login(auth.token);
var prefix = auth.prefix
bot.on("ready", function () {
    console.log("Let there be life.");
	bot.user.setActivity('prefix is: ' + (prefix));
	bot.user.setStatus('dnd');
});

bot.on("message", function (message) {

    if (!message.content.startsWith(auth.prefix)) return;

    var args = message.content.substring((auth.prefix).length).trim().split(/ +/g);

    switch (args.shift().toLowerCase()) {
    case 'changeprefix':
        let newPrefix = message.content.split(" ").slice(1,2)[0];
        auth.prefix = newPrefix;
        var prefix = newPrefix;
        bot.user.setActivity('prefix is: ' + (prefix));

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
			message.channel.send("Commands sent to you in your DMs")
      message.author.send('- help - take a guess \n- vote - makes ur message into a vote \n- xd - xd \n- yeah - yeah \n-everyone - @s everyone \n- say - Says whatever you say. \n- number - makes a random numbr \n- idiot - fuckin dumbass \n- one - 1 gif')
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
		case 'pants':
			message.channel.send('👖👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖👖')
			message.channel.send('👖👖👖👖👖👖👖👖')
      break;
        default:
		    if (message.author.equals(bot.user)) return;
			message.channel.send("I don't recognise this command, try something else!", {
				tts: false
			})
			message.react('🇪')
    }
});
//  bot.on("message", (message) => {
//    if (message.author.id !== auth.owner_id) return;
//    if (message.content === ('<@408821911351590912> prefix'));
//        let newPrefix = message.content.split(" ").slice(1,2)[0];
//        auth.prefix = newPrefix;
//        var prefix = newPrefix;
//        bot.user.setActivity('prefix is: ' + (prefix));
//});
//  })
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
bot.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("general").send(`"${member.user.username}" has made a mistake`);
});
