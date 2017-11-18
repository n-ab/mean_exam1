const mongoose = require('mongoose');
const Question = mongoose.model('Question');

module.exports = {
index: (req, res)=>{
  console.log('Its trivia time')
  Question.find({}, (questions, error)=>{
    if(questions){
      res.json(questions);
    } else{
      res.send(error)
    }
  })
},
create: (req, res) =>{
    console.log(req.body)
    const question = new Question(req.body)
    question.save((err) =>{
        if(err) {
            res.send(err);
        } else {
            // can access id here to put in session
            req.session.question_id = question._id;
            res.json(question);
        }
    })
},

}
