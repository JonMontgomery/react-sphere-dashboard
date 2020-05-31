'use strict';
require('dotenv').config({ path: './config/.env' });
const express = require('express');
const logger = require('./api/middleware/logger');
// const corsOptions = require('./api/middleware/cors');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(logger);
app.use('/', require('./api/routes/routes'));

app.listen(port, () => console.log(
  `Mona listening at http://localhost:${port}`
));