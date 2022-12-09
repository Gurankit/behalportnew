const mongoose=require('mongoose');
const dotenv=require ('dotenv');
const express=require('express');
const cors=require('cors');
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn')
app.use(cors());
app.use(express.json());
app.use(require('./router/auth'));
const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    res.send(`hello world server`);
})

app.get('/about',(req,res)=>{
    res.send(`hello world about`);
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})