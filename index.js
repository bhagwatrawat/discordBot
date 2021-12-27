const Discord = require('discord.js')

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] })
const axios= require('axios')
const keepAlive = require('./app.js')
require("dotenv").config()


// ready event is run when the bot connected to our server
// client.user.tag to get the name of bot
client.on("ready",()=>{
    console.log("logged in as "+client.user.tag)
    client.user.setPresence({
        activity:{
            name:`"!help: for help"`
        }
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
})

keepAlive()
client.login(process.env.TOKEN)