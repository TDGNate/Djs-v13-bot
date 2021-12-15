module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
			global.servers = client.guilds.cache.size
			console.log(`${client.user.tag} Onlined! `);
			client.user.setActivity(` Pyrex :) `, { type: "WATCHING"})
	},
};