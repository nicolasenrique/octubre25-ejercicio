var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');



router.get('/', userController.index);
router.get('/users', userController.list);

// router.post('/register', userController.create);
// router.get('/list', userController.list);

// router.get('/edit/:idUser', userController.edit);
// router.put('/edit', function(req, res){
//   res.send('fui por put')
// });
// router.delete('/delete/:idUser', function(req, res){
//   res.send('SOY DELETE')
// });


module.exports = router;