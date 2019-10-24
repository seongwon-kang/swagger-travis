var app = express();
// middleware, etc
var router = require('../app/router')(app);

module.exports = app;