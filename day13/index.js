const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from route sites");
});

app.get('/about',(req,res)=>{
    res.send("Hello from about Sites")
})
app.listen(3000, () => {
  console.log(`server is running at port http://localhost:3000`);
});
