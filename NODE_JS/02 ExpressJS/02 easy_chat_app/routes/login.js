const express=require('express');

const fs=require('fs');

const router=express.Router();

router.use(`/login`,(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" method="POST" action="/user">
     <input id="username" type="text" name="username"/>
     <button type="submit">Submit</button>
     </form>
     `);
});

router.use('/user',(req,res,next)=>{
   // console.log(req.body);
    res.redirect('/')
});

module.exports=router;