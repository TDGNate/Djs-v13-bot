const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

// Creat Slash Command / Connection

module.exports = {
    data: new SlashCommandBuilder()
         .setName('embed')
         .setDescription('simple-embed'),
         async execute(interaction) {
	// Info / Embed
	const embed = new MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle(' This s ( title ) ')
        .setURL('https://github.com/Pyr33x/Djs-v13-bot')
        .setAuthor( ' This s Author   ',' https://cdn.discordapp.com/attachments/874992162549420132/920559650389237791/8576-raccoon.png ')
        .setDescription(' It`s Description ', false)
        .setThumbnail('https://cdn.discordapp.com/attachments/874992162549420132/920559650389237791/8576-raccoon.png')
        .addField(' You can add field`s with the following code ')
        .setFooter(' It`s footer ', 'https://cdn.discordapp.com/attachments/874992162549420132/920559650389237791/8576-raccoon.png');



		return interaction.reply({ embeds: [embed] });
	},
};
