const express = require('express')
const app =express();
require('dotenv').config();
const PORT=process.env.PORT ||8000;

app.use(express.json());
app.use(express.urlencoded());
const user={
    Name:"Subhash",
    Class:"II BE B section"
}
app.get('/posts',(req,res)=>{
    res.status(201).json(user)
})

app.listen(PORT,()=>{console.log("Listening to the port ",PORT)})