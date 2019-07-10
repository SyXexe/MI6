const { Client } = require("discord.js");
const { Token, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log("Je suis prèt !");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.reply("Pong!");
  if (msg.content.startsWith(`${PREFIX}pong`)) msg.reply("Ping!");
});
});

client.login(TOKEN);
