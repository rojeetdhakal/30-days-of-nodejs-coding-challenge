const express = require('express')
const axios=require('axios')
const app = express()
const bodyParser=require("body-parser")
const port = 3000
app.use(bodyParser.urlencoded({extended:true}))   //use the bodyparser middleware
app.get('/', (req, res) => {

    res.sendFile(__dirname+'/index.html')
})
app.post('/',async(req,res)=>{
    let cityName=req.body.city  
    let URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dd16663363414557363c5daf9b950be4`
    // console.log(cityName)
    let response=await axios.get(URL)
    let weatherData=response.data
    // console.log(weatherData)
    const description=weatherData.weather[0].description
    const temperature=weatherData.main.temp
    console.log(description,temperature)
    res.write(`the current weather in `)
    
    // res.send("thanks")
})
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))