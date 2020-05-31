const moment = require('moment');

//middleware
const logger = (req, res, next) => {
    console.log(
      `${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`
    );
    process.stdout.write('params: ');
    console.log(req.query);
    next();
}

module.exports = logger;