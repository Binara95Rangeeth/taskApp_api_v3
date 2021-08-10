const express = require("express");
const checkAuthMiddleware = require("../middleware/auth.middleware").checkAuth;
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.post("/new-task", checkAuthMiddleware, taskController.newTask);
router.post("/update-task/:id", checkAuthMiddleware, taskController.updateTask);
router.get(
  "/update-task-completion/:id",
  checkAuthMiddleware,
  taskController.updateCompletion
);
router.delete(
  "/delete-task/:id",
  checkAuthMiddleware,
  taskController.deleteTask
);
router.get("/:uuid", checkAuthMiddleware, taskController.taskByUUID);
router.get("/", checkAuthMiddleware, taskController.getAllTasks);

module.exports = router;
