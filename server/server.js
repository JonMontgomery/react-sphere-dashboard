require('dotenv').config({ path: './config/.env' });
const express = require('express');
const logger = require('./api/middleware/logger');
const app = express();
const port = 3001;

app.use(logger);
app.use('/', require('./api/routes/routes'));

app.listen(port, () => console.log(
  `Mona listening at http://localhost:${port}`
));