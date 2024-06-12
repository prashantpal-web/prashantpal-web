const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Creates a new Short URL",
  },
];
const rest = new REST({ version: "10" }).setToken("");

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(""), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
