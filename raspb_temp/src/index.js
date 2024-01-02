const {Client, IntentsBitField} = require('discord.js');
const dotEnv = require('dotenv');
const eventHandler = require('./handlers/eventHandler');
dotEnv.config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildMessageTyping,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.GuildModeration,
        IntentsBitField.Flags.MessageContent,
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

eventHandler(client);

client.login(process.env.TOKEN);
