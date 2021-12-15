module.exports = {
	name: 'guildCreate',
	execute(guild) {
        servers = global.servers + 1
		console.log(`Bot Added To New Server! [${guild.id}] invited!, Servers Count: ${servers}`);
	},
};