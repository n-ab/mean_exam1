const users = require('./../controllers/users');
const questions = require('./../controllers/questions');
const usertables = require('./../controllers/usertables');
module.exports = (app)=>{
  //users
  app.post('/users/create', users.create);
  app.post('/users/auth', users.auth);
  app.post('/users/remove/:id', users.remove);
  app.get('/users', users.index);
  //questions
  app.post('/questions/create', questions.create);
  app.get('/questions', questions.index);
  //user table
  app.post('/usertables/create', usertables.create);
  app.get('/usertables', usertables.index);
}
