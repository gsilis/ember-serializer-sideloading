// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);
  var database   = require('./database.js');
  var seeds      = require('./seeds.js');

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));

  seeds.seed(database);

  mocks.forEach(function(route) { route(app, database); });
  proxies.forEach(function(route) { route(app); });

};
