const { Client } = require('discord.js-plus');
const Chalk = require('chalk');
const client = new Client();

client.on('ready', msg => {

    console.clear();
    console.log(`
    ┌─────────────────────────────────────────────┐
    │   Discord Relationship Manager by ${Chalk.redBright('armful')}    │
    └─────────────────────────────────────────────┘

    Successfully logged in as ${Chalk.redBright(client.user.tag)}
    Friends: ${Chalk.redBright(client.user.friends.size)} | ID: ${Chalk.redBright(client.user.id)}
        `)

});

//--------------------------------------------| Friend request received.

client.on('relationshipAdd', x => {
    console.log(`    [${Chalk.cyan('?')}] ${Chalk.cyan(x.user.username + '#' + x.user.discriminator)} sent a friend request. - Total Friends: ${Chalk.cyan(client.user.friends.size)}.\n`)
});

//--------------------------------------------| Friend request accepted.

client.on('relationshipUpdate', x => {
    console.log(`    [${Chalk.greenBright('+')}] ${Chalk.greenBright(x.user.username + '#' + x.user.discriminator)} was added successfully - Total Friends: ${Chalk.greenBright(client.user.friends.size)}.\n`)
});

//--------------------------------------------| Friend request denied / Friend removed.

client.on('relationshipRemove', x => {
    console.log(`    [${Chalk.redBright('-')}] ${Chalk.redBright(x.user.username + '#' + x.user.discriminator)} was removed successfully - Total Friends: ${Chalk.redBright(client.user.friends.size)}.\n`)
});

client.login("Your-Token-Here");