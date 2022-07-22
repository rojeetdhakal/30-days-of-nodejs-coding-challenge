const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
const name = {
  fname: "rojit",
  lname: "dhakal",
  admin: false,
};

app.get("/", (req, res) => {
  res.render("./pages/index", { name });
});
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
