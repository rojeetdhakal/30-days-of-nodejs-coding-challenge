const express = require('express')
const app = express()
const port = 3000
app.set("view engine",'ejs')  //to remind the node app that we are using the ejs here
app.get('/', (req, res) => res.send('Hello World!'))
const user={
    name:"rojit",
    surname:"dhakal",
}
app.get("/profile",(req,res)=>{
    // res.sendFile(__dirname+'/index.html')  //To  render the html file
    res.render('profile',{user})
})
app.get("/about",(req,res)=>{
    res.render("about")

})

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))