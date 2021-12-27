const Discord = require('discord.js')

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] })
const axios= require('axios')
// const keepAlive = require('./app.js')
require("dotenv").config()


// ready event is run when the bot connected to our server
// client.user.tag to get the name of bot
client.on("ready",()=>{
    console.log("logged in as "+client.user.tag)
})
// message event is run when the bot recieves a message
client.on("messageCreate",(msg)=>{
    if(msg.author.bot) return 
 if(msg.content=="ping"){
     msg.reply("pong")
 }
 if(msg.content=="soja ravi soja"){
     msg.reply("ha bhai ravi jldi soja bhai sahi keh raha ye")
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
// keepAlive()
client.login(process.env.TOKEN)