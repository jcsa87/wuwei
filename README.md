# 🤖 Discord AI Bot (Slash Commands)

This repository contains a **Discord bot built with Node.js** that allows users to interact with an **AI model using slash commands** (e.g. `/ask`).

The project is intended as a **learning-oriented implementation**, focusing on clean architecture, security best practices, and scalability for future features such as voice support or conversation memory.

---

## 🚀 Current Features

- Slash command integration (`/ask`)
- Real-time AI text responses
- Proper handling of Discord interactions (`deferReply` / `editReply`)
- Clean and minimal project structure
- Ready to be extended with additional commands or AI providers

---

## 🧠 Tech Stack

- **Node.js** (ES Modules)
- **discord.js v14**
- **dotenv** (environment variables)
- **OpenAI API** (optional – can be replaced with a local AI)

---

## 📁 Project Structure
├── index.js # Main bot logic
├── deploy-commands.js # Slash command registration
├── package.json
├── package-lock.json
├── .gitignore
└── .env.example # Environment variables template

---

## 💬 Usage
In any channel where the bot has permissions:
`/ask prompt: What is an API?`

The bot will reply with an AI-generated response directly in the channel.

---

## 💸 Cost Considerations

- Discord bot usage: free
- Text-based AI requests: low cost depending on provider
- The project can be adapted to:
- Use local AI models (e.g. Ollama) with zero per-request cost
- Add rate limiting to control usage

---

## 🔮 Possible Next Steps

- Voice input (Speech-to-Text)
- Voice output (Text-to-Speech)
- Conversation memory
- Per-user or per-server rate limiting
- Modular command system
- Local AI integration (offline usage)
