const { channelID } = require('../../config.json');
const dotenv = require('dotenv');
const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
dotenv.config();

module.exports = async (client) => {

    let color = '#00ff00';

    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    const channel = guild.channels.cache.get(channelID);

    var temp = fs.readFileSync("/sys/class/thermal/thermal_zone0/temp");
    var temp_c = temp/1000;

    if (temp_c >= 80) {
        color = '#ff0000';
    } else if (temp_c >= 60) {
        color = '#ff8000';
    } else if (temp_c >= 40) {
        color = '#ffff00';
    } else if (temp_c >= 20) {
        color = '#00ff00';
    }

    await channel.messages.fetch().then(messages => {
        channel.bulkDelete(messages);
    });

    const embed = new EmbedBuilder()
    .setTitle('Raspberry Pi Status')
    .addFields(
        { name: '🌡️ Temperatur', value: temp_c + '°C' , inline: true }
    )
    .setColor(color)
    .setFooter({
        text: 'NameGeändert | Raspberry PI Status |',
    })
    channel.send({embeds: [embed]})
}