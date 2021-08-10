const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
var cors = require("cors");
app.use(cors());
//=================================================

const userRoute = require("./routes/user.routes");
const taskRoute = require("./routes/task.routes");

app.use("/user", userRoute);
app.use("/task", taskRoute);

//=================================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is on port: ${PORT}`);
});
console.log(process.env.NODE_ENV);
//yo
