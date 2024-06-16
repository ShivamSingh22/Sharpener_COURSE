const express=require('express');
const fs=require('fs');

const router=express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        if(err){
            console.log(err);
            data=""
        }
    res.send(`<html>
    <body>
    ${data}<br/>
    <h1>Enter message:</h1>
    <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name="message" id="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">Submit</button>
    </form>
    </body>
    </html>`);
    })
    
});

router.post('/',(req,res,next)=>{
    const message=`${req.body.username} : ${req.body.message} => `;
    fs.writeFile('message.txt',message,{flag:'a'},(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Written to file')
        }
    });
    console.log(message);
    res.redirect('/')
});
module.exports=router;