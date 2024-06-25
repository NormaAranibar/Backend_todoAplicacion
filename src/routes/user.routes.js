const { Router } = require("express");

const loginController = require("../controllers/loginController.js");
const registerController = require("../controllers/registerController.js");
const getUsersController = require("../controllers/getUsersController.js");

const router = Router();

router.route("/users").get(getUsersController);
router.route("/user/signup").post(registerController);
router.route("/user/login").post(loginController);

module.exports = router;
