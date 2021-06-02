const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid").v4;

let todos = [
  {
    id: uuidv4(),
    todo: "do laundry",
    done: "false",
  },
  {
    id: uuidv4(),
    todo: "wash dishes",
    done: "true",
  },
];

router.get("/get-all-todos", function (req, res) {
  res.json({ payload: todos });
});

router.get("/get-todo-by-id/:id", function (req, res) {
  const id = req.params.id;
  let foundTodo;
  todos.forEach((item) => {
    if (item.id === id) {
      foundTodo = item;
    }
  });
  if (!foundTodo) {
    res.json({
      message:
        "The Todo ID you are looking for does not exists, please check ID",
    });
  } else {
    res.json({
      foundTodo,
    });
  }
});
// Make a GET "/get-todos-by-done" route that takes in a params that is either true or false. If the params is false, respond with a newDoneArray that has done === false. If the params is true, respond with a newDoneArray that done === true.

router.get("/get-todos-by-done/:done", function (req, res) {
  const { done } = req.params;
  let foundTodo = todos.findIndex((item) => item.game === done);
  if (foundTodo === -1) {
    res.status(404).json({ message: "Please check name" });
  } else {
    let foundGame = todos[foundTodo];
    res.json({ payload: foundGame });
  }
});

// Make a POST "/create-new-todo" route that POSTs a new todo (don't forget the id) with a done that is always false (don't need to pass in done since its always false) and responds with the whole todos array.

router.post("/create-new-todo", function (req, res) {
  let { todo, done } = req.body;
  if (todo.length === 0 || done.length === 0) {
    res.status(500).json({ message: "CANNOT CREATE NEW TODO" });
  }
  //IF TODO ALREADY EXISTS
  let foundTodo = todos.findIndex((item) => item.todo === req.body.game);
  if (foundTodo > -1) {
    res.status(500).json({ message: "SORRY, TODO ALREADY EXIST!" });
  } else {
    let newGameObj = {
      id: uuidv4(),
      todo,
      done,
    };
    todos.push(newGameObj);
    res.json({ payload: todos });
  }
});

module.exports = router;
