const express=  require("express")
const app =  express()
const port = process.env.PORT || 5000
const dotenv= require("dotenv")
dotenv.config({
    path:"./config.env",
})
app.get('/',(req,res)=>{
res.send("hello world")
})


app.listen(port,()=>{
console.log("server is running")
})