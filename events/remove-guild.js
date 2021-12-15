module.exports = {
	name: 'guildDelete',
	execute(guild) {
        servers = global.servers - 1
		console.log(`Bot Removed From A Server!, [${guild.id}], Servers Count: ${servers}`);
	},
};