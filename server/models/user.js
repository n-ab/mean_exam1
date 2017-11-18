const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: String,
  // score: String,
  // percentage: String,
  trivia_items: [{type:Schema.Types.ObjectId, ref: 'Question'}]
}, { timestamps: true });



mongoose.model('User', UserSchema);
