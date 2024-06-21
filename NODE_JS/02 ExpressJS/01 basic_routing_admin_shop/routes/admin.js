const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.get('/contactus', (req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','contact-us.html'));
});

router.get('/success',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','form_success.html'));
})

router.post('/success',(req,res,next)=>{
  console.log('Form Successfully Filled');
   res.redirect('/admin/success');
})
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
