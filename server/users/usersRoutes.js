// routes with api/users prefix

var usersCtrl = require('./usersCtrl.js');

module.exports = function (app) {

  app.route('/')
    .get(usersCtrl.allUsers)
    .post(usersCtrl.findUser)


};