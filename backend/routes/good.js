const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

const goodCtrl = require('../controllers/good.js');

router.get('/',   goodCtrl.findAllGood);
router.get('/:id', goodCtrl.findOneGood);
router.delete('/:id', goodCtrl.deleteGood);
router.post('/',  multer,  goodCtrl.createGood);
router.put('/:id',  multer,  goodCtrl.ModifyGood);
//router.post('/:id',  multer,  goodCtrl.AddPicsGood);

// remettre les auth

module.exports = router;