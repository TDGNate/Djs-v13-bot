const {  MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
		.setDescription('get member avatars')
        .addUserOption(o => o
        .setName('mention-user')
        .setDescription('Member Ro Baray Fereftan Avataresh Mention Kn')
        .setRequired(false)),
      

        async execute(interaction) {
            const user = interaction.options.getUser ('mention-user') || interaction.user
           
             const avatar = new MessageEmbed()
            .setAuthor(" Avatar Shoma Amadas 😳 " )
            .setImage(user.displayAvatarURL({format: "png", size: 2048}))
            .setColor("#ff000")
    
    
            return interaction.reply({ embeds: [avatar] });
        },
    };