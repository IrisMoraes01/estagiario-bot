const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'inserir token aqui';
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
    if (msg.content === '@d20') {
        msg.reply(Math.floor(Math.random() * 20) + 1);
    } else if (msg.content === '@d12') {
        msg.reply(Math.floor(Math.random() * 12) + 1);
    } else if (msg.content === '@d10') {
        msg.reply(Math.floor(Math.random() * 10) + 1);
    } else if (msg.content === '@d8') {
        msg.reply(Math.floor(Math.random() * 8) + 1);
    } else if (msg.content === '@d6') {
        msg.reply(Math.floor(Math.random() * 6) + 1);
    } else if (msg.content === '@d4') {
        msg.reply(Math.floor(Math.random() * 4) + 1);
    }
});

bot.on('message', msg => {
    if (msg.author.bot) {
        return;
    }

    if (msg.content.toLowerCase().startsWith('?play')) {
        let VoiceChannel = msg.guild.channels.find(channel => channel.id === 'Inserir id de canal de voz aqui');

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