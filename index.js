import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";
import OpenAI from "openai";

const client = new Client({
  intents: [GatewayIntentBits.Guilds], // suficiente para slash commands
});

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

client.once("ready", () => {
  console.log(`Logueado como ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName !== "ask") return;

  const prompt = interaction.options.getString("prompt", true);

  await interaction.deferReply(); // evita timeout

  try {
    const resp = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `Respondé en español, claro y directo.\n\nPregunta: ${prompt}`,
    });

    const text = resp.output_text?.trim() || "(Sin respuesta)";
    // Discord limita mensajes; recortamos por seguridad
    await interaction.editReply(text.slice(0, 1900));
  } catch (err) {
    console.error(err);
    await interaction.editReply("Error consultando el modelo.");
  }
});

client.login(process.env.DISCORD_TOKEN);
