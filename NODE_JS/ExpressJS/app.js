
const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('in first middleware');
    next();
});

app.use((req,res,next)=>{
    console.log('in second one')
    res.send({key1:"value"})
})
app.listen(3000);