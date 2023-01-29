const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
    res.render('home',{title:"My Node App",message:"Hello World"});
});

module.exports = router;