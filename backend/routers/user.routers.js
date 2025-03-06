const router = require('express').Router();

const userController=require('../controllers/user.controller')

router.post('/signup',userController.signUp);
router.post('/signin',userController.signIn);
router.post('/signout',userController.signOut);
router.post('/changepassword',userController.changePassword);
router.post('/user',userController.getUser);

module.exports = router;