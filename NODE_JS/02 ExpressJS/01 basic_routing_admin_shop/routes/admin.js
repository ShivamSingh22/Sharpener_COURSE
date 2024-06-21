const path = require('path');

const express = require('express');
const contactController=require('../controllers/contact')
const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.get('/contactus', contactController.contactUs);

router.get('/success',contactController.getSuccess);

router.post('/success',contactController.postSuccess);
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
