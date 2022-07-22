const express=require("express")
app=express()
PORT=3000
app.use(express.static('public'))
app.get("/",(req,res)=>{
    // console.log(__dirname)
    res.send( "<h1> hello from route site </h1>")
})
app.get('/page',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})
