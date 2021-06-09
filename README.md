<p align="center">
    <a href="https://discord.gg/VKJeg6nvSH">
  <img src="https://i.imgur.com/1XJhQBe.png"/>
    </a>
</p>

## Discord Relationship Manager

I am posting this for educational purposes only. Use this at your own risk as it is against Discord's **[Terms of Service](https://dis.gd/terms)**.  
Don't be a skid, credit me if you're going to copy paste code, and please leave a star if you find this useful.

###### Before you continue:
- Make sure you have installed **[NPM](https://www.npmjs.com/get-npm)**.
- Make sure you have a code editor, I recommend **[Visual Studio Code](https://code.visualstudio.com/)**.
- Have a basic understanding of **JavaScript** and **GitHub**.

###### Required packages:
- `discord.js-plus`
- `chalk`

## Install Packages:
    npm i

### Installation:
    git clone git@github.com:armfxl/Discord-Relationship-Manager.git

## Usage:

### Step 1 | Finding your Discord Token.

  1. Firstly, open the Discord console by pressing `ctrl + shift + i`.
  2. Navigate to the `Network` tab and type `api/` in the top left.
  3. Send a message in any channel and select `messages` then `Headers`.
  4. Locate `authorization` and copy your Token.

  ![armful#0001](https://i.imgur.com/QJHBbnj.png)
  
### Step 2 | Replacing the Token.

Replace `Your-Token-Here` at line **37** with your token.
```js
client.login("Your-Token-Here");
```

### Step 3 | Running your Relationship Manager.

    node index

<details>
  <summary>Full code</summary>
  
```js
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
```
  
</details>


## Example:

![armful#0001](https://i.imgur.com/7NjA9HH.png)

<p align="center">
  <a href="https://discord.gg/VKJeg6nvSH">
  <img src="https://i.imgur.com/HWF3UoH.png"/>
  </a>
</p>
