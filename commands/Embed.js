const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

// Creat Slash Command / Connection

module.exports = {
    data: new SlashCommandBuilder()
    .setName('credits')
		.setDescription('Details About The Bot Contributors'),
    async execute(interaction) {
				// Info / Embed
				const embed = new MessageEmbed()
        .setColor('#0053ff')
        .setTitle(' B In Qesmat Migan ( Title ) ')
        .setURL('https://github.com/Pyr33x/Djs-v13-bot')
        .setAuthor( ' B Inja Ham Author Migan  ',' https://cdn.discordapp.com/attachments/874992162549420132/920559650389237791/8576-raccoon.png ')
        .setDescription(' Inja Ham K Description e ', false)
        .setThumbnail('https://cdn.discordapp.com/attachments/874992162549420132/920559650389237791/8576-raccoon.png')
        .addField(' Injori Ham Mitunid Field Add Konid  ')
        .setFooter('In Ham K Footer e ', 'https://cdn.discordapp.com/attachments/874992162549420132/920559650389237791/8576-raccoon.png');



		return interaction.reply({ embeds: [embed] });
	},
};
