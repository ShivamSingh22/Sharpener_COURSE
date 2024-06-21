const rootDir = require('../util/path');

const path = require('path');
exports.contactUs=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
  };

exports.getSuccess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','form_success.html'));
  };

exports.postSuccess=(req,res,next)=>{
    console.log('Form Successfully Filled');
     res.redirect('/admin/success');
  };