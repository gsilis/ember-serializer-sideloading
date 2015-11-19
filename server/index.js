module.exports = function(app) {
  var bodyParser = require('body-parser');
  var globSync = require('glob').sync;
  var mocks = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);
  var database = require('./database.js');
  var seeds = require('./seeds.js');

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(bodyParser.json());
  app.use(morgan('dev'));

  seeds.seed(database);

  mocks.forEach(function(route) { route(app, database); });
  proxies.forEach(function(route) { route(app); });

};
