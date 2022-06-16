const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const router = express.Router();
//const morgan = require('morgan')

const app = express();
app.use(bodyParser.json());
//app.use(bodyParser.text({ type: "application/json" }));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`Welcome to your server, your listening on port: ${port}`);
});

// getting the login request from service.js and handles it
app.post("/loginClient", function (req, res) {
  console.log("------------------");
  console.log("app.js received the login request--->", req.body);
  console.log("------------------");
});

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
