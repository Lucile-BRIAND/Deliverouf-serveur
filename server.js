const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./app/routes/index");
const usersRouter = require("./app/routes/users");
const authRouter = require("./app/routes/auth");

const app = express();
const db = require("./app/models");

var corsOptions = {
  origin: "http://localhost:8089"
};

db.sequelize.sync();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// authentication
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname), 'public'));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to deliverouf application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


module.exports = app;