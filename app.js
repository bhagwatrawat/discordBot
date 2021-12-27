const express= require('express')

const app= express();
const port = 8000;
app.all('/',(req,res)=>{
    res.send("bot is running")
})
function keepAlive(){
app.listen(port,()=>{
    console.log('app is running on port '+port);
})
}
module.exports =keepAlive
