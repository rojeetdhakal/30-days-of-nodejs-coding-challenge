const http = require("http");
const server = http.createServer((req, res) => {           //Creating a server
  res.writeHead(200,{ "Content-type": "text/plain" });
  res.write("Hello How are you")
  console.log("Server Running");
  res.end("Server closed")                                   
});
server.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server Working")
    }
})
