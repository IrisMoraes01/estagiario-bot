const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'ODIyMTcxOTYwMzMwMTU4MDky.YFOZTg.fga3lt4hBg7kK1Q-GvIdheefqr0';
const ytd1 = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

bot.login(token);

bot.on('ready', () => {
    console.log('estou pronto');
});

bot.on('message', msg => {
    if (msg.content === 'Olá') {
        msg.reply('Olá! Bem vindo ao nosso canal!');
    }
});

bot.on('message', msg => {
    const splits = msg.content.split("-", 2);
    if (splits[0] === '!d') {
        msg.reply(Math.floor(Math.random() * parseInt(splits[1]) + 1));
    }
});

bot.on('message', msg => {
    if (msg.author.bot) {
        return;
    }

    if (msg.content.toLowerCase().startsWith('?play')) {
        let VoiceChannel = msg.guild.channels.find(channel => channel.id === '740741683909492803');

        if (VoiceChannel == null) {
            console.log('Canal não encontrado');
        }
        if (VoiceChannel !== null) {
            console.log('O canal foi encontrado');

            VoiceChannel.join()
                .then(connection => {
                    const stream = ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ', { filter: 'audioonly' });

                    const DJ = connection.playStream(stream, streamOptions);
                    DJ.on('end', end => {
                        VoiceChannel.leave();
                    });
                })
                .catch(console.error);
        }
    }
});