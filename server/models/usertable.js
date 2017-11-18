const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsertableSchema = new mongoose.Schema({
  username: String,
  score: String,
  percentage: String,
});
mongoose.model('Usertable', UsertableSchema);
