const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new mongoose.Schema({
  question: String,
  correct_answer: String,
  fake_answer_1:String,
  fake_answer_2:String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true });
mongoose.model('Question', QuestionSchema);
