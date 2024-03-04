const studentController = require("../student/student.controller");
const express = require("express");
const router = express.Router();

router.post("/register", studentController.register)

module.exports = router

// const express = require("express");
// const controller = require("../Task/Task.controller")
// const router = express.Router();

// router.post("/register", controller.register)