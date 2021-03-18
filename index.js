const Discord = require('discord.js');

const bot = new Discord.Client();


const token = 'ODIyMTcxOTYwMzMwMTU4MDky.YFOZTg.ieo58U0FGs0LVVv88XE4dnZsikk';

bot.login(token);

bot.on('ready', () => {
    console.log('estou pronto');
});

bot.on('message', msg => {
    if (msg.content === 'Olá') {
        msg.reply('Olá! Bem vindo ao nosso canal!');
    }
});