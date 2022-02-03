const {  MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
		.setDescription('get member avatars')
        .addUserOption(o => o
        .setName('mention-user')
        .setDescription('Mention a user for get avatars of it')
        .setRequired(false)),
      

        async execute(interaction) {
            const user = interaction.options.getUser ('mention-user') || interaction.user
           
             const avatar = new MessageEmbed()
            .setAuthor(" You're avatar is ready ;) " )
            .setImage(user.displayAvatarURL({format: "png", size: 2048}))
            .setColor("#FFFFFF")
    
    
            return interaction.reply({ embeds: [avatar] });
        },
    };
