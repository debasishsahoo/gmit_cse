const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.post("/signout", userController.signOut);
router.post("/change-password", userController.changePassword);
router.get("/:id", userController.getUser);

module.exports = router;
