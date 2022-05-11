import DiscordJS, { Intents,Interaction } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client=new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
client.on('ready',()=>{
   console.log('the bot is ready')
   new WOKCommands(client,{
       commandsDir:path.join(__dirname,'commands'),
       typeScript:true,
       testServers:['739761078711353384'],
   })
})
client.on('messageCreate',(message)=>{
  

    const guildID='739761078711353384';
    const guild=client.guilds.cache.get(guildID)
    let commands
    if(guild){
        commands=guild.commands
    }else{
        commands=client.application?.commands
    }
    commands?.create({
        name:'add',
        description:'Adds two numbers.',
        options:[
            {
                name:'num1',
                description:'First Number',
                required:true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
                {
                name:'num2',
                description:'Second Number',
                required:true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
        ]
    })
})

// interaction with BOT

//start code


client.on('interactionCreate',async(interaction)=>{
    if(!interaction.isCommand()){
        return
    }
    const {commandName,options}=interaction
    if (commandName === 'add'){
        const num1=options.getNumber('num1')!
        const num2=options.getNumber('num2')!
        await interaction.deferReply({
            ephemeral:true
        })
        await new Promise(resolve =>setTimeout(resolve,5000))
        await interaction.editReply({
            content:`sum is ${num1+num2}`,
            
        })
    }

})

//end code

client.login(process.env.TOKEN)