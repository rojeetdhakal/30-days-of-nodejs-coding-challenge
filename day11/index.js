const express=require("express")
const app=express()
const PORT=3000

app.get("/",(req,res)=>{
    res.send("hello from route side")
})
app.get("/about",(req,res)=>{
    res.send("hello from about side")
})
app.get("/contact",(req,res)=>{
    res.send("hello from contact side")
})
app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server is running in port http://localhost:${PORT}`)
    }else{
        console.log(err)
    }
})