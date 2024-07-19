const express = require('express');

const controller= require('../controllers/controller')
const router = express.Router();

router.post('/',controller.postAddData)

router.get('/',controller.getDbData);

router.delete('/:id',controller.deleteData);

module.exports=router;