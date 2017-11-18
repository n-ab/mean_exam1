const mongoose = require('mongoose');
const Usertable = mongoose.model('Usertable');

module.exports = {
  index: (req, res)=>{
    console.log('now in usertable')
    Usertable.find({}, (usertables, error)=>{
      if(usertables){
        res.json(usertables);
      } else{
        res.send(error)
      }
    })
  },
  create: (req, res)=>{
    console.log(req.body)
    const usertable = new Usertable(req.body)
    usertable.save((err)=>{
      if(err){
        res.send(err);
      } else {
        req.session.usertable_id = usertable._id;
        res.json(usertable);
      }
    })
  }
}
