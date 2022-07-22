const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const URL="https://api.openweathermap.org/data/2.5/weather?lat=34&lon=34&appid=dd16663363414557363c5daf9b950be4&units=metric"
    https.get(URL,(response)=>{
        console.log(response.statusCode)
        response.on("data",(data)=>{
            // console.log(data.toString())
            const weatherData=JSON.parse(data)
            console.log(weatherData)
            const mainTemp=weatherData.main.temp;
            res.write(`<h1>Temparature:- ${mainTemp} </h1>`)
            res.send()

        })
    })
 
});
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
