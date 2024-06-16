const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded());

app.use('/add-product',(req,res,next)=>{
    
    res.send('<html><body><h1>Add product name:</h1><form action="/product" method="POST"><input type="text" name="title"><br/><h1>Add product size:</h1><form action="/product" method="POST"><input type="text" name="size"><br/><button type="submit">Submit</button></form></body></html>')
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req,res,next)=>{
    res.send("<h1>Hello to root page</h1>")
});

app.listen(3000);