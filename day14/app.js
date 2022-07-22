//Handling POST request with express(simple sum Calculator)

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  var number1 = Number(req.body.number1);
  var number2 = Number(req.body.number2);
  var result = number1 + number2;
  console.log(result);
  res.send("sum=" + result);
});
app.listen(PORT, () => {
  console.log(`server is running in the port http://localhost:${PORT}`);
});
