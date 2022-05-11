import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category:'Testing',
    description:'send Embed',
    permissions:['ADMINISTRATOR'],
    callback:async({message,text}) =>{
        const json=JSON.parse(text)
        const embed=new MessageEmbed(json)
        return embed
        // const embed=new MessageEmbed()
        // .setTitle('New Embed Message for Testing')
        // .setColor('RED')
        // .setAuthor('Romiz')
        // .setFooter('Thank You All!')
        // .setDescription('Hello World')
        // .addFields([
        //     {
        //         name:'name',
        //         value:'value one'
        //     },
        //     {
        //         name:'name 32',
        //         value:'value 2'
        //     },
        //     {
        //         name:'name 3',
        //         value:'value 3'
        //     },
        // ])
        // const newMessage=await message.reply({
        //     embeds:[embed]
        // })
        // await new Promise(resolve=>setTimeout(resolve,5000))
        // const newEmbed=newMessage.embeds[0]
    },
} as ICommand