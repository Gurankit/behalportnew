const express=require('express');
const router=express.Router();

require('../db/conn');
const User=require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send('hello router');
});

router.post('/post',(req,res)=>{
    const {name,email,phone,message}=req.body;
    if(!name || !email || !phone || !message){
        return res.status(422).json({error:"Plz fill all details"});
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"User already registered"});
        }
        const user=new User({name,email,phone,message});
        user.save().then(()=>{
            return res.status(422).json({error:"User registered successfully"});
        }).catch((err)=>res.status(500).json({error:"Failed to register"}))
    }).catch(err=>{console.log(err);});
})

module.exports=router;