require('dotenv').config();
const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.write("Start working on express");
    res.end();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`App Listing Port ${PORT}`);
})