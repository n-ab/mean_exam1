const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
index: (req, res)=>{
  console.log('Welcome home')
  User.find({}, (users, error)=>{
    if(users){
      res.json(users);
    } else{
      res.send(error)
    }
  })
},
create: (req, res) =>{
    console.log(req.body)
    const user = new User(req.body)
    user.save((err) =>{
        if(err) {
            res.send(err);
        } else {
            // can access id here to put in session
            req.session.user_id = user._id;
            res.json(user);
        }
    })
},
auth: (req, res) => {
    user.findOne({
        name: req.body.name}, (user, error) =>{
            if(user) {
               if (user.name === req.body.name) {
                req.session.user_id = user._id
                res.json(user)
               } else {
                   res.send('Authentication Failed')
                }
            }
            else {
               res.send(err);
           }
        })
      },
      remove: (req, res)=>{
        console.log('deleting user...')
        User.remove({_id:req.params.id}, (user, err)=>{
          if(err){
            res.send(err);
          } else {
            res.send(user);
          }
        })
      }
}
