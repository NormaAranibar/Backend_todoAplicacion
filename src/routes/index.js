const { Router } = require('express');

const userRouter = require("./user.routes.js");

const router = Router();

router.use("/api/v1", userRouter);

module.exports = router;