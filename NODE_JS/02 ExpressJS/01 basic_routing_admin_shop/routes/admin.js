const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    
    res.send('<html><body><h1>Add product name:</h1><form action="/admin/product" method="POST"><input type="text" name="title"><br/><h1>Add product size:</h1><form action="/product" method="POST"><input type="text" name="size"><br/><button type="submit">Submit</button></form></body></html>')
});

router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
});

module.exports=router;