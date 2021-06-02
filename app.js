const express = require("express");
// REQUIRE IN EXPRESS
const logger = require("morgan");
// REQUIRE IN MORGAN
const path = require("path");

const indexRouter = require("./routes/indexRouter");
const todoRouter = require("./routes/todoRouter");

const app = express();
// CALL FUNCTION

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
// STATIC FILE

app.use(express.static(path.join(__dirname, "public")));


// ROUTES
app.use("/", indexRouter);
app.use("/api/todo", todoRouter);



// SETUP SERVER
app.listen(3000, () => {
  console.log(`Server is running on PORT: ${3000}`);
});