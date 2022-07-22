const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let bookList = ["javascript", "python", "C++"];
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/book", (req, res) => {
  return res.json({ allbook: bookList });
});
app.post("/book", (req, res) => {
  const bookName = req.body.name;
  if (bookList.includes(bookName)) {
    return res.json({ success: false });
  }
  bookList.push(bookName);
  return res.json({ success: true });
});
app.delete("/book", (req, res) => {
  const bookToDelete = req.body.name;
  bookList = bookList.filter((book) => book !== bookToDelete);
  return res.json({ allbook: bookList });

  //    return res.json({allbook:bookList})
});

app.put("/book", (req, res) => {
  bookToUpdate = req.body.name;
  updatedBook = req.body.newBookName;

  const bookIndex = bookList.findIndex((book) => book == bookToUpdate);
  if(bookIndex==-1){
    return res.json({success:false})
  }
  bookList[bookIndex]=updatedBook
  return res.json({success:true})
});

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
