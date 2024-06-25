const { Router } = require("express");

const userRouter = require("./user.routes.js");
const todoRouter = require("./todo.routes.js");

const router = Router();

router.use("/api/v1", userRouter);
router.use("/api/v1", todoRouter);

module.exports = router;
