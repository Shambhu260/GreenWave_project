const express = require("express");
const controller = require("../Task/Task.controller")
const router = express.Router();

router.post("/register", controller.register)
router.get("/getAllTask", controller.getAllTask)
router.put("/updateTask/:taskId", controller.updateTask)
router.delete("/deleteTask/:taskId", controller.deleteTask)
router.get("/getSingleData/:taskId", controller.getSingleData);
router.post("/login", controller.login)
module.exports = router