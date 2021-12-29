const Discord = require('discord.js')
const Permissions=require('discord.js').Permissions
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS,Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES,Discord.Intents.FLAGS.GUILD_MEMBERS] })
const axios= require('axios')
const keepAlive = require('./app.js')   //keeps the bot alive
require("dotenv").config()


// ready event is run when the bot connected to our server
// client.user.tag to get the name of bot
client.on("ready",()=>{
    console.log("logged in as "+client.user.tag)
    client.user.setPresence({ activities: [{ name: `"!help" for help` }], status: 'idle' })
    // welcome message for server
    client.on("guildMemberAdd", (member) => {
    console.log(member)
    const channelId='898975095454830686'
    const message=`server me naya bot ${member.user.username} aaya hai`
    const channel= member.guild.channels.cache.get(channelId)
    channel.send(message)
})    
    
})

// message event is run when the bot recieves a message
client.on("messageCreate",(msg)=>{
    if(msg.author.bot) return 

 if(msg.content=="ping"){
     msg.reply("pong")
 }
//  fo help command
 if(msg.content=="!help"){
    msg.channel.send(`These are the commands supported in this channel:
    1. !montage : to see the best bgmi tdm montage
    2. /naruto quotes : for the naruto quotes
    3. /quotes : for quotes
    4. /chuck norris joke : for the chuck norris jokes
    5. type lokesh or croc : to know about lokesh
    6. type vijay or bicchu : to know about vijay
    7. type lagger or bhagwat: to know about bhagwat `)
 }
 if(msg.content=="soja ravi soja"){
     msg.reply("ha bhai ravi jldi soja bhai sahi keh raha ye")
 }
//  for embed command
 if(msg.content=="!montage"){
     const embed = new Discord.MessageEmbed()
     .setTitle("FPP TDM MONTAGE WAREHOUSE")
     .setURL("https://youtu.be/IYGVvwD44TM")
     .setColor('#A1DDC2')
    .setAuthor({ name: 'LaggerBotx', iconURL: 'https://booyah.co.id/wp-content/uploads/2020/07/rrq-hades-logo-quiz.jpg', url: 'https://www.youtube.com/channel/UCvjXCQhKrgGoGrc6rSZ9S8g' })
    .setDescription('Do Like share and subscibe the channel ')
    .setThumbnail('https://img.gurugamer.com/resize/740x-/2021/08/18/always-take-cover-e420.jpg')
    // .addFields(
    //     { name: 'Regular field title', value: 'Some value here' },
    //     { name: '\u200B', value: '\u200B' },
    //     { name: 'Inline field title', value: 'Some value here', inline: true },
    //     { name: 'Inline field title', value: 'Some value here', inline: true },
    // )
    // .addField('Inline field title', 'Some value here', true)
    .setImage('https://img.gurugamer.com/resize/740x-/2021/08/18/always-take-cover-e420.jpg')
    .setTimestamp()
    .setFooter('The best bgmi player of Botx clan and Leader of Botx', 'https://booyah.co.id/wp-content/uploads/2020/07/rrq-hades-logo-quiz.jpg');
     msg.channel.send({ embeds: [embed] })
 }
// to create text channel
if(msg.content.startsWith("!createTextChannel")){
    const {member}= msg;
    if(member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])){
        const channelName= msg.content.replace("!createTextChannel ","")
        if(channelName=="" || channelName==" " || channelName==msg.content){
            msg.reply("please enter a valid command or channel name")
            return
        }
        if(msg.guild.channels.cache.find(channel => channel.name === channelName && channel.type === 'GUILD_TEXT')){
            msg.reply("Text channel already exists")
            return 
        }
        
        msg.guild.channels.create(channelName,{type:'GUILD_TEXT'}).then(channel=>{
            const categoryId='898975095454830684'
            channel.setParent(categoryId)
            msg.reply(`Text channel ${channelName} created`)
        }).catch(err=>{
            msg.reply(`error ${err}`)
        })

    }
    else{
        msg.reply("You dont have permission to create channel")
    }
}
// to delete text channel
if(msg.content.startsWith("!deleteTextChannel")){
    const {member}= msg;
    if(member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])){
        const channelName= msg.content.replace("!deleteTextChannel ","")
        const channel = msg.guild.channels.cache
        .filter((channel) => {
            if(channel.name==channelName && channel.type=="GUILD_TEXT"){
                return channel.name === channelName 
            }
          
        })
        .first();
        if (!channel) {
            msg.reply('That Text channel does not exist.')
            return
          }
      
          channel.delete()
      
          msg.reply('Text Channel deleted!')

    }
    else{
        msg.reply("You dont have permission to delete channel")
    }
}
// to create voice channel 
if(msg.content.startsWith("!createVoiceChannel")){
    const {member}=msg
    if(member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])){
        const channelName= msg.content.replace("!createVoiceChannel ","")
        if(channelName=="" || channelName==" " || channelName==msg.content){
            msg.reply("please enter a valid command or channel name")
            return
        }
        if(msg.guild.channels.cache.find(channel => channel.name === channelName    && channel.type === 'GUILD_VOICE')){
            msg.reply("Voice channel already exists")
            return  
        }
        
        msg.guild.channels.create(channelName,{type:'GUILD_VOICE'}).then(channel=>{
            // channel.setUserLimit() to set user limit in the voice channel
            const categoryId='898975095454830685'
            channel.setParent(categoryId)
            msg.reply(`Voice channel ${channelName} created`)
        }).catch(err=>{
            msg.reply(`error ${err}`)
        })

    }
    else{
        msg.reply("You dont have permission to create channel")
    }

}
// to delete voice channel
if(msg.content.startsWith("!deleteVoiceChannel")){
    const {member}= msg;
    if(member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])){
        const channelName= msg.content.replace("!deleteVoiceChannel ","")
        const channel = msg.guild.channels.cache
        .filter((channel) => {
            if(channel.name==channelName && channel.type=="GUILD_VOICE"){
                return channel.name === channelName 
            }
          
        })
        .first();
        if (!channel) {
            msg.reply('That Voice channel does not exist.')
            return
          }
      
          channel.delete()
      
          msg.reply('Voice Channel deleted!')

    }
    else{
        msg.reply("You dont have permission to delete channel")
    }
}
//  for banning 
if(msg.content.startsWith("!ban")){
    const {member,mentions} = msg
    if(member.permissions.has([Permissions.FLAGS.BAN_MEMBERS])){
        const target=mentions.users.first()
        if(target){
            const targetMember= msg.guild.members.cache.get(target.id)
            targetMember.ban();
            msg.channel.send(`<@${target.tag}> has been banned`)
        }
        else{
            msg.channel.send(`<@${member.id}> please mention a valid user`)
        }
    }
    else{
        msg.reply(`you dont have permissions for banning the members`)
    }
}
// for kicking the member form the server
if(msg.content.startsWith("!kick")){
    const {member,mentions} = msg
    if(member.permissions.has([Permissions.FLAGS.KICK_MEMBERS])){
        const target=mentions.users.first()
        if(target){
            const targetMember= msg.guild.members.cache.get(target.id)
            targetMember.kick();
            msg.channel.send(`<@${target.tag}> has been kicked`)
        }
        else{
            msg.channel.send(`<@${member.id}> please mention a valid user`)
        }
    }
    else{
        msg.reply(`you dont have permissions for kicking the members`)
    }
}

 if(msg.content=="!custom gameplay"){
    const embed = new Discord.MessageEmbed()
    .setTitle("T3 CUSTOM HIGHLIGHTS")
    .setURL("https://youtu.be/9Mwe8d1fJm8")
    .setColor('#A1DDC2')
   .setAuthor({ name: 'CrocBotx', iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWn5RoA4kbXnhLBfRUd3OBQ2jVqz2iHKM_rg&usqp=CAU', url: 'https://www.youtube.com/channel/UC9XNaatRhU_zIqEtWqvakJQ' })
   .setDescription('Do Like share and subscibe the channel ')
   .setThumbnail('https://i.ytimg.com/vi/qTa-kXtrbTY/maxresdefault.jpg')
   // .addFields(
   //     { name: 'Regular field title', value: 'Some value here' },
   //     { name: '\u200B', value: '\u200B' },
   //     { name: 'Inline field title', value: 'Some value here', inline: true },
   //     { name: 'Inline field title', value: 'Some value here', inline: true },
   // )
   // .addField('Inline field title', 'Some value here', true)
   .setImage('https://i.ytimg.com/vi/qTa-kXtrbTY/maxresdefault.jpg')
   .setTimestamp()
   .setFooter('Member of BotX clan', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWn5RoA4kbXnhLBfRUd3OBQ2jVqz2iHKM_rg&usqp=CAU');
    msg.channel.send({ embeds: [embed] })
}
 if(msg.content=="/naruto quotes"){
    const x= Math.floor(Math.random()*200)
    const y = Math.floor(Math.random()*10)
    axios.get(`https://animechan.vercel.app/api/quotes/anime?title=naruto&page=${x}`).
    then(res => {
        
        msg.reply(res.data[y].quote+"- "+res.data[y].character);
    })
    .catch(err=>{
        msg.reply("No quotes sorry!!")
    })
 }
 if(msg.content=="/chuck norris joke"){
     axios.get("https://api.chucknorris.io/jokes/random")
     .then(res=>{
         msg.reply(res.data.value)
     })
     .catch(err=>{
         msg.reply("oops!! no joke for you")
     })
 }
 if(msg.content.toLowerCase().includes("lokesh")){
     msg.reply("lokesh toh chutiya hai")
 }
 if(msg.content.toLowerCase().includes("croc")){
     msg.reply("croc toh chutiya hai")
 }
 if(msg.content.toLowerCase().includes("vijay")){
    msg.reply("vijay toh gandu hai")
}
if(msg.content.toLowerCase().includes("bicchu")){
    msg.reply("bicchu toh gandu hai")
}
 if(msg.content.toLowerCase().includes("lagger") || msg.content.toLowerCase().includes("bhagwat") ||msg.content.toLowerCase().includes("bhola") ){
     msg.reply("baap k bare mai faltu nahi bhsdk")
 }
 if(msg.content.toLowerCase()=="/quotes"){
     axios.get("https://zenquotes.io/api/random")
     .then(res=>{
         msg.reply(res.data[0].q)
     })
     .catch(err=>{
         msg.reply("oops!! no quote for you")
     })
 }
//  for pokedex channel only 
if(msg.channel.name=="pokedex"){
    if(msg.content.startsWith("!pokemon")){
        const pokemonName= msg.content.replace("!pokemon ","")
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(res=>{
            const embed = new Discord.MessageEmbed()
            .setTitle(res.data.types[0].type.name+" type pokemon")
            .setColor('#A1DDC2')
           .setAuthor({ name: pokemonName, iconURL: res.data.sprites.other.home.front_default})
           .setDescription('Pokemon Stats')
        .addFields(
       { name: 'HP', value:res.data.stats[0].base_stat+"",inline: true  },
       { name: 'Attack', value: res.data.stats[1].base_stat+"", inline: true },
        )
        .addFields(
       { name: 'Defense', value: res.data.stats[2].base_stat+"", inline: true },
       { name: 'Speed', value: res.data.stats[5].base_stat+"", inline: true },
        )
        .addFields(
       { name: 'Special-Defense', value:res.data.stats[4].base_stat+"",inline: true},
       { name: 'Special-Attack', value:  res.data.stats[3].base_stat+"",inline: true },
         

   )
 
           .setThumbnail(res.data.sprites.front_default)
           .setImage(res.data.sprites.other.home.front_default)
           .setTimestamp()
           .setFooter(`Height : ${res.data.height} Weight : ${res.data.weight}` )
            msg.channel.send({ embeds: [embed] })
        
        })
        .catch(err=>{
            console.log(err)
            msg.reply("Pokemon not found")
        })
    }
}
})

keepAlive()
client.login(process.env.TOKEN)