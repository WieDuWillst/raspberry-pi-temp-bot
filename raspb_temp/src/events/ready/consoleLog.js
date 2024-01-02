const sendStatus = require('../../utils/sendStatus')

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}`)
    sendStatus(client)

    setInterval(() => {
        sendStatus(client)
        console.log("Updating status.")
    }, 2*60*1000) // 2 minutes
}