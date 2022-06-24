const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const port = 5000;

const myRouter = require('./routes/routes')

const app = express();

//app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'application/json' }));
app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

// Redirecting
app.use('/', myRouter);

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});

module.exports = app;
