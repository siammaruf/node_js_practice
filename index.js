const Logged = require("./logger");
const logger = new Logged();

logger.on("messageLogger",(arg)=>{
    console.log(`I am working on Event Emitter. My name is ${arg.name}`);
});

logger.log("Message")