const express = require('express');
const logger = require('./middleware/logger');
const app = express();
const port = 3001;

app.use(logger);
app.use('/', require('./routes/routes'));


const passport = require('passport');
var session = require("express-session"),
    bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


app.listen(port, () => console.log(
  `Mona listening at http://localhost:${port}`
));