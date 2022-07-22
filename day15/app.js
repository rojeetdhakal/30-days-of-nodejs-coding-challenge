const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/bmi", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/bmi", (req, res) => {
 h = parseFloat(req.body.Height);  //height in meter
 console.log(h)
 w = parseFloat(req.body.Weight);
 console.log(w)
 bmi = w / (h * h);
 console.log(bmi)
 bmi = bmi.toFixed();
 urname= req.body.Name;
 console.log(urname)
  res.send(` <h1> hey! ${urname} your BMI  is around:  ${bmi}</h1>`);
});
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
