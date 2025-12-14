import "dotenv/config";
import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ask",
    description: "Preguntale algo a la IA",
    options: [
      {
        name: "prompt",
        description: "Tu pregunta",
        type: 3, // STRING
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log("Registrando comandos (guild)...");
  await rest.put(
    Routes.applicationGuildCommands(
      process.env.DISCORD_CLIENT_ID,
      process.env.DISCORD_GUILD_ID
    ),
    { body: commands }
  );
  console.log("Listo: /ask registrado.");
} catch (err) {
  console.error(err);
}
