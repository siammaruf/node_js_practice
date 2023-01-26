const http = require("http");

// const Logged = require("./logger");
// const logger = new Logged();
//
// logger.on("messageLogger",(arg)=>{
//     console.log(`I am working on Event Emitter. My name is ${arg.name}`);
// });
//
// logger.log("Message")

const server = http.createServer((req, res)=>{
   if (req.url === '/'){
       res.write("Node Project Started");
       res.end();
   }
});

server.listen(8000,()=>{
    console.log(`Listening on port 8000`);
});