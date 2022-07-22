// const EventEmitter = require("events");

// const event = new EventEmitter(); //creating an object event using  EventEmmiter
// //handle event
// event.on("sayname", () => {
//   console.log("hello Rojit");
// });

// event.emit("sayname"); //generate event
const express = require("express");
const EventEmitter = require("events");
const event = new EventEmitter();
const app = express();
const port = 3000;
let count=0;
event.on("apiCount",()=>{
    count++;
    console.log("api coount",count)
})

app.get("/", (req, res) => {
    res.send("<h1> Hello Dhakal <h1/>")
    event.emit("apiCount")

});
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
