const router = require('express').Router();

const userController=require('../controllers/user.controller')

router.post('/signup',userController.signUp);
router.post('/signin',userController.signIn);
router.post('/signout',userController.signOut);
router.put('/changepassword',userController.changePassword);
router.get('/id',userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;