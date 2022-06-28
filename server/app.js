const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const cookieParser = require('cookie-parser')

dotenv.config();

if (!process.env.SERVER_PORT) {
  console.log("fail");
  process.exit(1);
}
const SERVER_PORT = parseInt(process.env.SERVER_PORT, 10);

const myRouter = require('./routes/routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'application/json' }));
app.use(express.json());

app.use(cors({
  credentials: true,
  origin: "http://localhost:8080"
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  cookie: {
    maxAge: 604800000, // 7 days
    sameSite: 'lax',
    // TODO for https
    // secure: true
    // For HTTP dev
    secure: false,
    httpOnly: false
  }, 
  // store: new MemoryStore({
  //   checkPeriod: 86400000 // prune expired entries every 24h
  // }),
  resave: false,
  secret: process.env.COOKIE_SECRET,
  saveUninitialized: true
}))

// Redirecting
app.use('/', myRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is runing on port ${SERVER_PORT}`);
});

module.exports = app;
