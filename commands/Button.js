const { MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');


// Creat Slash Command / Connection

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription(' simple-button '),
	async execute(interaction) {
        // button
		const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('Register')
                .setStyle('SUCCESS')
                .setEmoji('🚀')
                .setDisabled('true'),
                );
                
                

// Button Collector
const filter = i => i.customId === 'primary' && i.user.id === interaction.user.id;

const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

collector.on('collect', async i => {
    if (i.customId === 'primary') {
        await i.update({ephemeral: true, content: ' You Clicked The **Button** 😳 ', components: [] });
    }
});

collector.on('end', collected => console.log(`Collected ${collected.size} items`));


        // Send Button, Button
		return interaction.reply({ephemeral: true, content: ' Click The Button 😳 ', components: [row]});
	},
};
