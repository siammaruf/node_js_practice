require('dotenv').config();
const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const courses = [
    {id:1,name:'course 1'},
    {id:2,name:'course 2'},
    {id:3,name:'course 3'},
    {id:4,name:'course 4'},
    {id:5,name:'course 5'},
];

app.get("/",(req, res)=>{
    res.write("Start working on express");
    res.end();
});

// API Get Request
app.get("/api/courses",(req, res)=>{
    if (courses.length === 0) res.status(404).send('The course list is empty!');
    res.send(courses);
});

// Api Get request By Id
app.get("/api/courses/:id",(req, res)=>{
    const course = courses.find(obj => obj.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("The course was not found with the id");
    res.send(course);
});

// Api Create Course
app.post("/api/courses",(req, res)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const { error } = schema.validate(req.body);
    const course = {id:courses.length+1,name:`course ${courses.length+1}`};
    if (error) return res.status(400).send(error.details[0].message);
    courses.push(course);
    res.send(courses);
});

// Api Update Course
app.put("/api/courses/:id",(req, res)=>{
    const course = courses.find(obj=>obj.id===parseInt(req.params.id));
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const { error } = schema.validate(req.body);
    if (!course) return res.status(404).send("The course was not found with the ID");
    if (error) res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
});

// Api Delete
app.delete("/api/courses/:id",(req, res)=>{
    const course = courses.find(obj=>obj.id===parseInt(req.params.id));
    if (!course) return res.status(404).send("The course was not found with the ID");
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(courses);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`App Listing Port ${PORT}`);
})