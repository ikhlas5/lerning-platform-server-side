const express=require('express');
const app =express();
const port= process.env.PORt|| 50000;

app.use(cors())

const courseCatagories=require('./data/catagory.json')
const course=require('./data/courses.json')