const express=require('express');
const app =express();
const cors=require('cors')
const port= process.env.PORt|| 5000;

app.use(cors())
// 1 get data
const courseCatagories=require('./data/catagory.json')
const course=require('./data/courses.json')

// 2 testing purpuse
app.get('/', (req,res)=>{
    res.send('learning web')
})

// get catagories 
app.get('/courseCatagories',(req,res)=>{
    res.send(courseCatagories)
})
// get course
app.get('/course',(req,res)=>{
    res.send(course)
})
// get specifice data 
app.get('/course/:id',(req,res)=>{
    id=req.params.id;
    const selectedCourse=course.find(c=>c.id===id)
    res.send(selectedCourse)
})
app.listen(port,()=>{
    console.log('server running',port)
})

module.exports = app;