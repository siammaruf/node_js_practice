require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
// set or export DEBUG=app:startup
const debug = require("debug")('app:startup');
const Courses = require("./routers/courses");
const Home = require("./routers/home");
const logger = require("./middleware/logger");
const app = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "development"){
    app.use(morgan("tiny"));
    debug("Morgan Enabled");
}

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",Home);
app.use("/api/courses",Courses);

app.set('view engine', 'pug');
app.set('views','./views');

app.listen(PORT,()=>{
    debug(`App Listing Port ${PORT}`);
})