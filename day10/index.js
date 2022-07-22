const express = require("express");
const app = express(); //create app with the help of express
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server working on port ${PORT} `);
  }
});
