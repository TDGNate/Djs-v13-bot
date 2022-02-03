const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
//  Add .env data file for get bot information
require("dotenv").config();

// Get data from .env config file
let clientID = process.env.CLIENT_ID
let token = process.env.TOKEN
let guildID = process.env.GUILD_ID

// Def in commands folder
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started Refreshing Application ( / ) Commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientID, guildID),
			{ body: commands },
		);

		console.log('Successfully Reloaded Application ( / ) Commands.');
	} catch (error) {
		console.error(error);
	}
})();
