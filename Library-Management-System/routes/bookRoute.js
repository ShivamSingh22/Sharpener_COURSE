const express=require('express')
const router= express.Router();
const bookController = require('../controllers/bookController');

router.get('/books',bookController.getBooks);
router.get('/returned-books',bookController.getReturnedBooks);
router.post('/book',bookController.postBook);
router.post('/return/:id',bookController.returnBook);

module.exports=router;