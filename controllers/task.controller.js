const model = require("../models");
const validator = require("fastest-validator");

const v = new validator();

module.exports = {
  newTask,
  updateTask,
  updateCompletion,
  deleteTask,
  taskByUUID,
  getAllTasks,
};

// get task by uuid
function taskByUUID(req, res) {
  const id = req.params.id;
  model.Task.findByPk(id)
    .then((result) => {
      return res.status(200).json({
        result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Something went wrong",
        error,
      });
    });
}
// get all task belongs to a user
function getAllTasks(req, res) {
  const userId = req.userData.userId;
  model.Task.findAll({ where: { userId } })
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json({
        message: "something went wrong",
        error,
      });
    });
}
// create task
function newTask(req, res) {
  // return res.json(req.userData);
  const newTask = {
    taskname: req.body.taskname,
    content: req.body.content,
    on_date: req.body.on_date,
    on_time: req.body.on_time,
  };

  const taskScheme = {
    taskname: { type: "string", optional: false },
  };

  const validRes = v.validate(newTask, taskScheme);
  if (validRes !== true) {
    return res.status(400).json({
      message: "Validation faild",
      error: validRes,
    });
  } else {
    model.Task.create({ ...newTask, userId: req.userData.userId })
      .then((result) => {
        return res.status(201).json({
          message: "Task created",
          task: result,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          message: "Task not created",
          error,
        });
      });
  }
}
// update task
function updateTask(req, res) {
  const id = req.params.id;
  const updatedTask = {
    taskname: req.body.taskname,
    content: req.body.content,
    on_date: req.body.on_date,
    on_time: req.body.on_time,
  };

  const taskSchema = {
    taskname: { type: "string", optional: false },
  };

  const v = new validator();
  const validRes = v.validate(updatedTask, taskSchema);

  if (validRes !== true) {
    return res.status(400).json({
      message: "Validation faild",
      error: validRes,
    });
  }

  model.Task.update(
    { ...updatedTask, userId: req.userData.userId },
    { where: { id } }
  )
    .then((result) => {
      if (result > 0) {
        return res
          .status(200)
          .json({ message: "Task updated successfully", result });
      } else {
        return res.status(404).json({
          message: `Cannot find task ${id}`,
          result,
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Something went wrong",
        error,
      });
    });
}
// update task completion
function updateCompletion(req, res) {
  const id = req.params.id;
  model.Task.findOne({
    where: {
      id: id,
    },
  }).then((task) => {
    if (task) {
      task.task_done = !task.task_done;
      task.save().then((result) => {
        res.status(200).json({ result: result });
      });
    } else {
      return res.status(500).json({
        message: "task not found",
      });
    }
  });
}
// delete task
function deleteTask(req, res) {
  const id = req.params.id;
  model.Task.destroy({ where: { id } })
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully deleted",
        result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Something went wrong",
        error,
      });
    });
}
