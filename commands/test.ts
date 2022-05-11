import { ButtonInteraction, MessageActionRow, MessageButton,Interaction,Collector,CollectorFilter } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category:'Testing',
    description:'Testing',
    slash:true,
    testOnly:true,
    callback:async({interaction:msgInt,channel})=>{
        const row= new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('band_yes')
            .setEmoji('🔨')
            .setLabel('Confirm')
            .setStyle('SUCCESS')
        )
        .addComponents(
            new MessageButton()
                .setCustomId('ban_no')
                .setLabel('Cancel')
                .setStyle('DANGER')
        )
 
        await msgInt.reply({
            content:'Are you Sure?',
            components:[row],
        })
        const filter=(btnInt:ButtonInteraction)=>{
            return msgInt.user.id === btnInt.user.id
        }
        const collector=channel.createMessageComponentCollector({
            max:1,
            time:1000*15

        })
        collector.on('collect',(i:ButtonInteraction)=>{
            i.reply({
                content:'You Clicked a button',
                ephemeral:true
            })
        })
    },
} as ICommand