const Logged = require("./logger");
const logger = new Logged();

logger.on("messageLogger",(arg)=>{
    console.log(`Listener Enabled ${arg}`);
});

logger.log("Message")