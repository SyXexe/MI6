const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.reply("Pong!");
  if (msg.content === "everyone")
    msg.reply("@everyone, salut à tous !", { disableEveryone: false });
  if (msg.content === "noteveryone")
    msg.reply("@everyone (noteveryone), salut à tous !");
});

client.login("NTk4MTUzOTQ5MzkyMTQyMzM2.XSTl4Q.rx8TsTGdW3grmz1rUqN-1Lx7fUk");
