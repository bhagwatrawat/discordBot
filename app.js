const express= require('express')

const app= express();
const PORT= 5000
app.all('/',(req,res)=>{
    res.send("bot is running")
})
function keepAlive(){
app.listen(PORT,()=>{
    console.log('app is running on port '+PORT);
})
}
module.exports =keepAlive
