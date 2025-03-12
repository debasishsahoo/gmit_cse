const router = require('express').Router();

const userController=require('../controllers/user.controller')
const { authMiddleware } = require("../middlewares/auth.middleware");

router.post('/signup',userController.signUp);
router.post('/signin',userController.signIn);

router.post('/signout',authMiddleware,userController.signOut);
router.put('/changepassword',authMiddleware, userController.changePassword);
router.get('/:id',authMiddleware,userController.getUser);
router.put("/:id",authMiddleware, userController.updateUser);
router.delete("/:id",authMiddleware, userController.deleteUser);

module.exports = router;