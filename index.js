const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.write("Start working on express");
    res.end();
});

app.listen(3000,()=>{
    console.log(`App Listing Port 3000`);
})